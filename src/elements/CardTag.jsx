import styled from '@emotion/styled';
import React from 'react';

const CardImg = styled.div`
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'); */
`;

const CardInfoHover = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
`;

const CardImgHover = styled.div`
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;
`;

const CardInfo = styled.div`
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
`;

const CardCategory = styled.span`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
`;

const CardTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', serif;
`;

const CardBy = styled.span`
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
`;

const CardAuthor = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
`;

const CardLink = styled.a``;

const Card = styled.article`
  margin-right: 2%;
  margin-bottom: 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  width: 18%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 9px 13px 11px -7px rgba(0, 0, 0, 0.1);
  @media (max-width: 1000px) {
    width: 31.2%;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  @media (max-width: 700px) {
  }
  ${CardImg} {
    background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  }
  ${CardImgHover} {
    background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  }
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
  }
  &:hover ${CardInfoHover} {
    opacity: 1;
  }
  &:hover ${CardImgHover} {
    height: 100%;
    opacity: 0.8;
  }
  &:hover ${CardInfo} {
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
    color: white;
  }
`;

const CardTag = ({ tagName }) => {
  return (
    <Card>
      <CardImg></CardImg>
      <CardLink>
        <CardImgHover></CardImgHover>
      </CardLink>
      <CardInfo>
        <CardCategory></CardCategory>
        <CardTitle>{tagName}</CardTitle>
        <CardBy>My thoughts on the road and moments I want to cherish forever</CardBy>
      </CardInfo>
    </Card>
  );
};
export default CardTag;
