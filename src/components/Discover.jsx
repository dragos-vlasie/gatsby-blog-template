import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '../elements/Button';
import Img from 'gatsby-image';
import { useEffect } from 'react';

const encodeSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="none">
    <path d="M13.7.3C12-.1 10-.2 8.3.6c-1.3.7-2.2 1.7-3.1 3-1.3 1.9-2.7 3.8-3.5 6.1C.8 12 .5 14.5.3 17c-.2 2.2-.4 4.5-.2 6.8s1.1 4.5 2.6 6c2.9 2.8 9.5 2.5 13.3 1.8 3.1-.5 6.2-1 9-2.5 3.5-1.8 4.4-5.1 5.7-9.1 1.6-4 2.3-13.1-1.5-15.6-4.5-2.9-10.3-3-15.5-4.1z" />
  </svg>
);

const DiscoverContainer = styled.a`
  padding: 20px 15px 30px;
  display: block;
  position: relative;

  .monthly-destination__container {
    max-width: 1100px;
    margin: auto;
    position: relative;
    width: 100%;
    padding: 10px 0;
    display: grid;
    grid-column-gap: 2rem;
    -webkit-column-gap: 2rem;
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-row-gap: 2rem;
    row-gap: 2rem;
  }

  .monthly-destination__content {
    grid-column: 1 / 14;
    grid-row: 1;
    position: relative;
  }

  .monthly-destination__subtitle {
    color: #d1d1d1;
    display: block;
    font-family: written, cursive;
    font-size: 5.5em;
    line-height: 1;
    position: relative;
  }

  .monthly-destination__title {
    display: inline-block;
    font-size: 9em;
    font-family: 'Headings';
    line-height: 0.9;
    margin-top: -0.1em;
    position: relative;
    word-break: break-word;
    padding-left: 30px;
    z-index: 1;
  }

  .monthly-destination__excerpt {
    font-family: Montserrat;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 1.85em;
    padding-left: 60px;
    margin: 0;
    /* padding: 15px 0 0; */
    width: 35%;
  }

  .monthly-destination__cover {
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' preserveAspectRatio='none'%3E%3Cpath d='M13.7.3C12-.1 10-.2 8.3.6c-1.3.7-2.2 1.7-3.1 3-1.3 1.9-2.7 3.8-3.5 6.1C.8 12 .5 14.5.3 17c-.2 2.2-.4 4.5-.2 6.8s1.1 4.5 2.6 6c2.9 2.8 9.5 2.5 13.3 1.8 3.1-.5 6.2-1 9-2.5 3.5-1.8 4.4-5.1 5.7-9.1 1.6-4 2.3-13.1-1.5-15.6-4.5-2.9-10.3-3-15.5-4.1z'/%3E%3C/svg%3E")
      bottom left/130% 100% no-repeat;
    mask-position: center;
    mask-size: 100% 100%;
    bottom: -80px;
    top: auto;
    width: 100%;
    margin: 0 auto;
    grid-column: 8 / 17;
    grid-row: 1;
    position: relative;
    height: calc(100% + 63px);
    top: -27px;
    width: 100%;
    margin: 0 auto;
    grid-column: 6 / 17;
    grid-row: 1;
  }

  .monthly-destination__cover-image {
    height: 100%;
    width: 100%;

    .monthly-destination__cover:after {
      background-color: rgba(0, 0, 0, 0.2);
      bottom: 0;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: 2;
    }
  }

  .monthly-destination__btn-circle {
    bottom: -35px;
    cursor: pointer;
    height: 40px;
    position: relative;
    left: 104px;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
    width: 40px;
  }

  @media (max-width: 900px) {
    .monthly-destination__container {
      .monthly-destination__title {
        font-size: 7em;
      }
    }

    .monthly-destination__content {
    }
  }

  @media (max-width: 720px) {
    .monthly-destination__container {
      .monthly-destination__subtitle {
        font-size: 4.5em;
      }

      .monthly-destination__title {
        font-size: 4em;
        padding: 0;
      }

      .monthly-destination__subtitle {
        font-size: 3em;
      }

      .monthly-destination__excerpt {
        width: 50%;
        padding: 0;
      }

      .monthly-destination__btn-circle {
        left: 0;
        bottom: -16px;
      }
    }

    .monthly-destination__content {
      grid-column: 1 / 10;
    }
  }

  @media (max-width: 510px) {
    .monthly-destination__container {
      grid-template-columns: repeat(4, 1fr);
    }

    .monthly-destination__content {
      grid-column: 1 / 10;
    }
    .monthly-destination__cover {
      position: absolute;
      left: 56%;
      grid-column: 1 / 10;
      -webkit-mask-size: 116% 100%;
      -webkit-mask-size: 139% 100%;
      mask-size: 100% 100%;
      bottom: 0;
      width: 45%;
    }

    .monthly-destination__excerpt {
      width: 45%;
      font-size: 11px;
    }
  }
`;

const Discover = ({ image }) => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    console.log(count, 'first');
    setCount(true);
  });

  console.log(count);

  return (
    <>
      <DiscoverContainer href="/morocco/" title="See all articles about Morocco">
        <div className="monthly-destination__container">
          <div className="monthly-destination__content">
            <span className="monthly-destination__subtitle">Discover</span>
            <div className="monthly-destination__title">Morocco</div>
            <p className="monthly-destination__excerpt">
              Stunning interior gardens, courtyards, and delicious tajines, spanning from the Atlas Mountains to the
              Sahara.
            </p>
            <div className="monthly-destination__btn-circle">
              <Button />
            </div>
          </div>
          <div className="monthly-destination__cover">
            <div className="monthly-destination__cover-image">
              <Img fluid={image || {} || [] || ''} height="100%" />
            </div>
          </div>
        </div>
      </DiscoverContainer>
    </>
  );
};

export default Discover;
