import React from 'react';
import styled from '@emotion/styled';
import ImageLink from '../components/ImageLink';
import Button from '../elements/Button';

const Container = styled.div`
  margin-top: 35px;
`;

// margin-bottom on mobile

const CategoryTitle = styled.h3`
  font-size: 50px;
  margin-bottom: 40px;
  text-align: center;
`;

const Scroller = styled.div`
  width: calc(100% + ((100vw - 100%) / 2) - 8px);
  overflow: hidden;
  position: relative;
  z-index: 1;

  .scroller__btn {
    display: none;
    height: 101%;
    opacity: 1;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.4s;
    z-index: 100;
    cursor: pointer;
    position: absolute;
    width: 55px;

    button {
      /* -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    border: none;
    display: flex;
    height: 100%;
    cursor: pointer;
    position: absolute;
    width: 55px; */

      span {
        display: block;
        font-size: 40px;
        height: 40px;
        position: absolute;
        -webkit-transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
        transition: transform 0.2s, -webkit-transform 0.2s;
        width: 40px;

        .icon-arrow-small {
          color: #353535;
          font-size: 0.5em;
          left: 10px;
          position: absolute;
          top: 10px;
          z-index: 1;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .scroller__btn-background {
      background: #fff;
      height: 100%;
      left: calc(100% - (100vw - 100%) + 55px);
      position: absolute;
      mix-blend-mode: saturation;
      width: calc((100vw - 100%) - 55px);
      top: 0;
      z-index: 99;
    }
    .scroller__btn {
      display: block;
      height: 101%;
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      transition: opacity 0.4s;
      z-index: 100;

      .center {
        height: 100%;
        display: flex;
        align-items: center;
      }

      span {
        height: 50px;
        width: 50px;
        display: block;
      }
    }
    .scroller__btn--prev {
      left: 0;
      span {
        transform: scale(-1);
      }
    }

    .scroller__btn--next {
      right: 60px;
      span {
        transform: scale(1);
      }
    }
  }
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
  &::after {
    padding-right: calc((100vw - 1120px)/2);
    content: "";
    display: block;
}
  }
  &::before {
    content: "";
    display: block;
  }
`;

const ScrollItem = styled.div`
  max-width: 50%;
  width: ${props => (props.type == 'continents' ? '335px' : props.type === 'normal' ? '430px' : '33.33%')};
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

const activateLasers = () => {
  console.log('ds')
}

export const OverFlowContainer = ({ articles, type, height, image, title, textPosition }) => {
  return (
    <>
      <CategoryTitle> {title}</CategoryTitle>
      <Scroller>
        {/* <div className="scroller__btn scroller__btn--prev">
          <div className="center">
            <span onClick={activateLasers}>
              <Button />
            </span>
          </div>
        </div> */}
        <ScrollContainer>
          <ScrollInner>
            {articles.map((article, index) => (
              <ScrollItem key={index} type={type}>
                <ImageLink image={image} type={type} title={article} textPosition={textPosition} />
              </ScrollItem>
            ))}
          </ScrollInner>
        </ScrollContainer>
        {/* <div className="scroller__btn scroller__btn--next">
          <div className="center">
            <span onClick={activateLasers}>
              <Button />
            </span>
          </div> */}
        {/* </div> */}
        <div className="scroller__btn-background"></div>
      </Scroller>
    </>
  );
};
export default OverFlowContainer;
