import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes, { element } from 'prop-types';
import { Link } from 'gatsby';
import PostList from './PostList';

import Country from './Country';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 2rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 2rem 1rem 1rem 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ColumnSmall = styled.div`
  width: 25%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ColumnLarge = styled.div`
  width: 75%;
  background: #f8f8f8;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 1rem 0rem 1rem;
  @media (max-width: 1000px) {
    margin: 1rem 1rem 0rem 1rem;
  }
  @media (max-width: 700px) {
    margin: 1rem 1rem 0rem 1rem;
  }
`;

const CountryList = ({ data }) => {
  const edges = data.edges;
  const [continent, setContinent] = useState();
  return (
    <Wrapper>
      <Row>
        <ColumnSmall>
          {edges.map(({ node }) => {
            const { id, frontmatter } = node;
            const { tags } = frontmatter;
            return (
              <Country
                key={id}
                count={tags}
                active={tags === continent}
                onClick={() => setContinent(tags)}
              />
            );
          })}
        </ColumnSmall>
        <ColumnLarge>
          <PostWrapper>
            {edges.map(({ node }) => {
              const { id, excerpt, frontmatter } = node;
              const { cover, path, title, date, tags } = frontmatter;
              if (tags === continent) {
                return (
                  <PostList
                    key={id}
                    cover={cover.childImageSharp.fluid}
                    path={path}
                    title={title}
                    date={date}
                    excerpt={excerpt}
                  />
                );
              }
            })}
          </PostWrapper>
        </ColumnLarge>
      </Row>
    </Wrapper>
  );
};

export default CountryList;

CountryList.propTypes = {};
