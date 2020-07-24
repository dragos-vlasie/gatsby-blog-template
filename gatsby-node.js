const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/pages/tags.jsx');
    const tagPosts = path.resolve('src/templates/page.jsx');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: { frontmatter: { published: { eq: true } } }
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  excerpt
                  frontmatter {
                    path
                    title
                    tags
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
        const posts = result.data.allMarkdownRemark.edges.slice(0, 9); // take only the posts out
        const pages = result.data.allMarkdownRemark.edges.slice(9); // take only the pages out

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
        //   const kebabcase = tagName.split(' ').join('-');
        //   const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
        //   createPage({
        //     path: `/${kebabcase}/`,
        //     component: tagPosts,
        //     context: {
        //       posts,
        //       upperTag,
        //     },
        //   });
        // });

        //create pages
        pages.forEach(({ node }) => {
          const path = node.frontmatter.path;
          const title = node.frontmatter.title;

          createPage({
            path: `${path}/`,
            component: tagPosts,
            context: {
              title: title,
            },
          });
        });
        //create posts
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          const prev = index === 0 ? null : posts[index - 1].node;
          const next = index === posts.length - 1 ? null : posts[index + 1].node;
          // const subCategoryPath = node.frontmatter.subCategory
          //   ? '/' + node.frontmatter.subCategory
          //   : '';
          const tags = node.frontmatter.tags ? '/' + node.frontmatter.tags : '';

          createPage({
            path: `${tags}${path}/`,
            component: postTemplate,
            context: {
              pathSlug: path,
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
