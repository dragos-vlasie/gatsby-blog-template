const path = require('path');
const locales = require('./config/i18n');

// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``));
// Remove slashes at the beginning and end
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '');
// If the "lang" is the default language, don't create a prefix. Otherwise add a "/en" before the slug (defined in "locales")
const localizedSlug = (_page, node) =>
  locales[node.lang].default ? `/${_page}/${node.uid}` : `/${locales[node.lang].path}/${_page}/${node.uid}`;

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Only create one 404 page at /404.html
  if (page.path.includes('404')) {
    return;
  }

  // First delete the pages so we can re-create them
  deletePage(page);

  Object.keys(locales).map(lang => {
    // Remove the trailing slash from the path, e.g. --> /blog
    page.path = replaceTrailing(page.path);

    // Remove the leading AND traling slash from path, e.g. --> blog
    const name = replaceBoth(page.path);
    // Create the "slugs" for the pages like in "onCreateNode". Unless default language, add prefix àla "/en"
    let localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`;

    let translatedPath = localizedPath => {
      if (localizedPath.startsWith('ro')) {
        let property = localizedPath.slice(3);
        return locales[lang][property] ? `${locales[lang].path}/${locales[lang][property]}` : localizedPath;
      }
      return localizedPath;
    };

    localizedPath = translatedPath(localizedPath);

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
        pathSlug: localizedPath,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/pages/tags.jsx');
    const tagPosts = path.resolve('src/templates/tag.jsx');

    resolve(
      graphql(
        `
          query {
            allMdx(
              filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { published: {} } }
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 75)
                  frontmatter {
                    title
                    tags
                    path
                    lang
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const posts = result.data.allMdx.edges;

        const postsByTag = {};
        // create tags page
        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }

              postsByTag[tag].push(node);
            });
          }
        });

        const tags = Object.keys(postsByTag);

        // createPage({
        //   path: '/tags',
        //   component: tagPage,
        //   context: {
        //     tags: tags.sort(),
        //   },
        // });

        //create tags
        // tags.forEach(tagName => {
        //   const posts = postsByTag[tagName];

        //   createPage({
        //     path: `/${tagName}`,
        //     component: tagPosts,
        //     context: {
        //       posts,
        //       tagName,
        //     },
        //   });
        // });

        //create posts
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          const prefix = node.frontmatter.lang;
          // const arrayPath = node.fileAbsolutePath.split('/');
          // const category = arrayPath.slice(arrayPath.indexOf('content') + 1, arrayPath.indexOf('index.md') - 1).join();
          const prev = index === 0 ? null : posts[index - 1].node;
          const next = index === posts.length - 1 ? null : posts[index + 1].node;
          createPage({
            path: `${path}`,
            component: postTemplate,
            context: {
              pathSlug: path,
              lang: prefix,
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
