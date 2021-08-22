import React from 'react';
import styled from '@emotion/styled';
import Button from '../elements/Button';
import MaskedImage from '../elements/MaskedCategory';
import { useSpring, animated } from 'react-spring';

import BackgroundTitle from '../elements/BackgroundTitle';
import Img from 'gatsby-image';

const RelatedCategory = styled.section`
  background-image: url(/build/images/search-bubbles.png), url(/build/images/search-bubbles.png),
    url(/build/images/search-bubbles.png), url(/build/images/search-bubbles.png), url(/build/images/search-bubbles.png),
    url(/build/images/search-bubbles.png), url(/build/images/search-bubbles.png), url(/build/images/search-bubbles.png);
  border-radius: 20px;
  height: 350px;
  margin-top: 40px;
  position: relative;

  background: #f5f5f5 left center/auto 240px no-repeat;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05), -2px 2px 2px rgba(0, 0, 0, 0.04), 2px 2px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex: 1 1 auto;
  /* height: 200px; */
  max-width: 76.25rem;
  margin: 25px auto 0;
  overflow: hidden;
  width: 100%;

  &:after {
    background: url(/build/images/search-bubbles.png) top left/cover;
    background-image: url(/build/images/search-bubbles.png);
    background-position-x: left;
    background-position-y: top;
    background-size: cover;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    content: '';
    height: 540px;
    position: absolute;
    right: 36%;
    top: -100px;
    width: 620px;
    z-index: 11;
  }

  @media (max-width: 767px) {
    height: 230px;
  }
`;

const RelatedCategoryLink = styled.a`
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
`;

const RelatedCategoryContent = styled.div`
  left: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  @media (max-width: 767px) {
    left: 16px;
  }
`;

const encodedSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' preserveAspectRatio='none'%3E%3Cpath d='M13.7.3C12-.1 10-.2 8.3.6c-1.3.7-2.2 1.7-3.1 3-1.3 1.9-2.7 3.8-3.5 6.1C.8 12 .5 14.5.3 17c-.2 2.2-.4 4.5-.2 6.8s1.1 4.5 2.6 6c2.9 2.8 9.5 2.5 13.3 1.8 3.1-.5 6.2-1 9-2.5 3.5-1.8 4.4-5.1 5.7-9.1 1.6-4 2.3-13.1-1.5-15.6-4.5-2.9-10.3-3-15.5-4.1z'/%3E%3C/svg%3E%0A\")";

const RelatedCategoryTitle = styled.h4``;

const RelatedCategoryBtn = styled.div`
  cursor: pointer;
  display: block;
  margin: 0 0 -25px;
  position: relative;
  margin-top: -20px;
  border: 0;
  transition: transform 0.2s;
  height: 50px;
  width: 50px;
  @media (max-width: 767px) {
    height: 40px;
    width: 40px;
  }
`;

const RelatedCategoryBackground = styled.div`
  mask-position: center left;
  mask-repeat: no-repeat;
  mask-position: center left;
  mask-size: 125% 130%;
  mask-repeat: no-repeat;
  bottom: 0;
  left: 50%;
  position: absolute;
  right: 0;
  top: 0;
  mask-image: ${encodedSvg};

  @media (max-width: 767px) {
    mask-size: 125% 160%;
    left: 41%;
  }
`;

const CategorySpan = styled.span`
  display: block;
  font-size: 1em;
  color: black;
  font-weight: 700;
  margin: 0 0 8px;
  font-family: 'Headings', Arial;
  margin: 0 0 3px;
  position: relative;
  white-space: nowrap;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const CategoryPreview = ({ image, label }) => {
  console.log('CategoryPreview -> label', label);
  console.log('CategoryPreview -> image', image);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <RelatedCategory>
      <RelatedCategoryLink href="/czech-republic/" title="All articles about Czech Republic">
        <RelatedCategoryContent>
          <CategorySpan>read all articles about</CategorySpan>
          <RelatedCategoryTitle title={label}>
            <BackgroundTitle label={label} />
          </RelatedCategoryTitle>
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <RelatedCategoryBtn>
              <Button />
            </RelatedCategoryBtn>
          </animated.div>
        </RelatedCategoryContent>
        <RelatedCategoryBackground bg={MaskedImage}>
          <Img fluid={image || {} || [] || ''} height="100%" />
        </RelatedCategoryBackground>
      </RelatedCategoryLink>
    </RelatedCategory>
  );
};
export default CategoryPreview;
