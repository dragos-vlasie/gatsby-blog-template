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
    background: url(https://www.saltinourhair.com/build/images/pink-roundshape.png) top left/cover;
    background-image: url(https://www.saltinourhair.com/build/images/pink-roundshape.png);
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
  font-family: headings, Arial;
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

export const DestinationsList = ({ data }) => {
  console.log('DestinationsList -> data', data);
  return (
    <div className="DestinationsList">
      <h3>Pick destination</h3>
      <Navigation>
        <List>
          {data &&
            data.map((destination, index) => (
              <Item key={index}>
                <Anchor href="https://www.saltinourhair.com/france/">
                  <div>
                    <Image
                      data-src="https://www.saltinourhair.com/wp-content/uploads/2018/07/paris-city-trip-guide-street-eiffel-tower-144x163.jpg"
                      src="https://www.saltinourhair.com/wp-content/uploads/2018/07/paris-city-trip-guide-street-eiffel-tower-144x163.jpg"
                      alt="France"
                    />
                  </div>
                  <Text>{destination}</Text>
                </Anchor>
              </Item>
            ))}
        </List>
      </Navigation>
    </div>
  );
};
export default DestinationsList;
