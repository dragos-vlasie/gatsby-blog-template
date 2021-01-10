import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// const data = ['Romania', 'China', 'Vietnam', 'Rusia', 'Croatia', 'Grecia', 'Vietnam', 'Franta', 'Germania'];

const SidebarArticles = styled.div`
  width: 340px;
  position: sticky;
  top: 100px;

  .sidebar-articles__title {
    margin-bottom: 8px;
    overflow: hidden;
    text-align: center;

    h6 {
      display: block;
      font-family: headings, Arial;
      font-size: 14px;
      letter-spacing: 1.1px;
      position: relative;
      text-transform: uppercase;
    }
  }
  .sidebar-articles__container {
    background-color: #f5f5f5;
    border-radius: 15px;
    margin-bottom: 35px;
    padding: 20px;

    .article-block {
      height: 175px;
      margin-bottom: 0;
      align-self: flex-start;
      border-radius: 7px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-bottom: 14px;
      overflow: hidden;
      position: relative;
      width: 100%;
      z-index: 1;
    }

    .article-block__content {
      margin-left: 15px;
      top: 20px;
      order: 1;
      position: absolute;
      width: auto;
      z-index: 2;
    }

    .article-block__content-link {
      display: block;
      text-decoration: none;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
      width: 90%;

      .article-block__title {
        font-size: 14px;
        line-height: 1.85;
        letter-spacing: -0.3px;
        margin: 0 0 0 0.4em;

        span {
          background: #fff;
          box-shadow: 0.4em 0 0 #fff, -0.4em 0 0 #fff;
          background-image: linear-gradient(transparent calc(100% - 0.4em), #f0e8e7 0),
            linear-gradient(transparent calc(100% - 0.4em), #fff 0);
          background-repeat: no-repeat;
          background-size: 0 88%, 0 88%;
          text-shadow: 0 0 #353535, 0.06em 0 0 rgba(255, 255, 255, 0.7), 0 0.05em 0 rgba(255, 255, 255, 0.7),
            -0.06em 0 0 rgba(255, 255, 255, 0.7);
          transition: background 0.2s;
        }
      }
    }
    .article-block__image {
      order: 2;
      bottom: 0;
      left: 0;
      height: inherit;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      transform: scale(1);
      transition: transform 0.5s cubic-bezier(0.75, 0, 0.15, 1), -webkit-transform 0.5s cubic-bezier(0.75, 0, 0.15, 1);
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      border-radius: 5px;
      .article-block__image-link {
        display: block;
        height: inherit;
        width: 100%;
      }
    }
  }
`;

export const SidebarLinks = ({prev,next}) => {
  return (
    <SidebarArticles className="sidebar-articles sidebar-articles--related">
      <div className="sidebar-articles__title">
        <h6>Related articles</h6>
      </div>
      <div className="sidebar-articles__container">
      {prev && (
        <a
          className="article-block"
          href="https://www.saltinourhair.com/poland/auschwitz-birkenau/"
          title="Visiting Auschwitz Concentration Camp – Everything you need to know"
        >
          <div className="article-block__content">
            <article className="article-block__content-link">
              <h2 className="article-block__title">
                <span>Visiting Auschwitz Concentration Camp – Everything you need to know</span>
              </h2>
            </article>
          </div>
          <div className="article-block__image">
            <div className="article-block__image-link">
              <picture className="article-block__image-container">
                <Img
                  fluid={prev.frontmatter.cover.childImageSharp.fluid}
                />
              </picture>
            </div>
          </div>
        </a>
      )}
      {next && (
        <a
        className="article-block"
        href="https://www.saltinourhair.com/poland/auschwitz-birkenau/"
        title="Visiting Auschwitz Concentration Camp – Everything you need to know"
      >
        <div className="article-block__content">
          <article className="article-block__content-link">
            <h2 className="article-block__title">
              <span>Visiting Auschwitz Concentration Camp – Everything you need to know</span>
            </h2>
          </article>
        </div>
        <div className="article-block__image">
          <div className="article-block__image-link">
            <picture className="article-block__image-container">
              <Img
                fluid={next.frontmatter.cover.childImageSharp.fluid}
              />
            </picture>
          </div>
        </div>
      </a>
      )}
        
      </div>
    </SidebarArticles>
  );
};
export default SidebarLinks;
