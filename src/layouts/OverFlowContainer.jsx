import React from 'react';
import styled from '@emotion/styled';
import ImageLink from '../components/ImageLink';

const Container = styled.div`
  margin-top: 35px;
`;

// margin-botom on mobile

const CategoryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const Scroller = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  padding-left: 15px;
  padding-right: 15px;
  /* overflow-x: auto; */
  position: relative;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: -7px;
  margin-right: -7px;
`;

const ScrollItem = styled.div`
  max-width: 50%;
  width: ${props => (props.type == 'continents' ? '315px' : '33.33%')};
  height: ${props => (props.type == 'normal' ? '315px' : '450px')};
  flex: 1 0 auto;
  padding: 0 7px;
  margin-bottom: ${props => (props.type == 'continents' ? '35px' : '0')};

  @media (max-width: 800px) {
    width: 80vw;
    height: ${props => (props.type == 'normal' ? '250px' : '375px')};
    max-width: 100%;
  }
`;

export const OverFlowContainer = ({ articles, type, title, textPosition }) => {
  return (
    <Container>
      <CategoryTitle> {title}</CategoryTitle>
      <Scroller>
        <ScrollContainer>
          <ScrollInner>
            {articles.map((article, index) => (
              <ScrollItem key={index} type={type}>
                <ImageLink
                  image={
                    'https://www.saltinourhair.com/wp-content/uploads/2020/04/best-things-to-do-luang-prabang-laos-704x600.jpg'
                  }
                  type={type}
                  title={article}
                  textPosition={textPosition}
                />
              </ScrollItem>
            ))}
          </ScrollInner>
        </ScrollContainer>
      </Scroller>
    </Container>
  );
};
export default OverFlowContainer;
