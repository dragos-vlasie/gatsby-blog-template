import React from 'react';
import styled from '@emotion/styled';

// const data = ['Romania', 'China', 'Vietnam', 'Rusia', 'Croatia', 'Grecia', 'Vietnam', 'Franta', 'Germania'];

const Navigation = styled.nav`
  width: 400px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05), -2px 2px 2px rgba(0, 0, 0, 0.04), 2px 2px 2px rgba(0, 0, 0, 0.05),
    0 0 2px rgba(0, 0, 0, 0.08);
  position: relative;

  &:after {
    background: url('https://www.saltinourhair.com/build/images/pink-roundshape.png') top left/cover;
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
    z-index: -1;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &.post-chapters {
    width: 92%;
    margin-bottom: 35px;

    ul {
      column-count: 2;
      column-gap: 0;
      border-radius: inherit;
      font-family: headings, Arial;
      font-weight: 900;
      overflow: hidden;
      padding: 10px 0 2px;
      margin: 0;
      display: block;

      li {
        margin: 0 1.5rem;
        font-size: 15px;
        text-transform: uppercase;
        width: auto;
        a {
          padding: 10px 0;
          align-items: center;
          display: inline-flex;
          padding: 7px 0;
          width: 100%;
        }
      }
    }
  }
  &.post-chapters:after {
    content: 'Chapters';
    background: #f5f5f5;
    border-radius: 20px 20px 0 0;
    color: rgba(53, 53, 53, 0.6);
    height: 35px;
    font-family: headings;
    font-size: 15px;
    left: 1.5em;
    padding: 6px 20px 0;
    position: absolute;
    top: -35px;
    z-index: -1;
    width: auto;
    right: initial;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
`;

const Text = styled.span`
  display: inline-block;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Headings', Arial;
  font-weight: 900;
`;

const Item = styled.li`
  font-size: 14px;
  margin: 0 6px;
  width: calc(50% - 12px);
  border-top: 1px solid rgba(216, 196, 195, 0.2);
  text-transform: uppercase;
`;

const Anchor = styled.a`
  align-items: center;
  display: inline-flex;
  padding: 7px 0;
  width: 100%;
  color: black;
  align-items: center;
  display: inline-flex;
  padding: 7px 0;
  width: 100%;

  &:hover ${Text} {
    border-bottom: 1px solid #353535;
    margin-bottom: -1px;
  }
`;
const Image = styled.img`
  height: 40px;
  margin-right: 10px;
  max-height: 40px;
  max-width: 40px;
  object-fit: cover;
  position: relative;
  border-radius: 20px;
  width: 40px;
`;

export const DestinationsList = ({ type, data, img }) => {
  return (
    <Navigation className={type === 'post-chapters' ? 'post-chapters' : null}>
      <List>
        {data &&
          data.map((destination, index) => (
            <Item key={index}>
              <Anchor href="/france/">
                <div>
                  <Image
                    data-src="/wp-content/uploads/2018/07/paris-city-trip-guide-street-eiffel-tower-144x163.jpg"
                    src={img ? img.srcWebp : '/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp'}
                    alt="France"
                  />
                </div>
                <Text>{destination}</Text>
              </Anchor>
            </Item>
          ))}
      </List>
    </Navigation>
  );
};
export default DestinationsList;
