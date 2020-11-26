import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h3`
  margin: 40px auto 20px auto;
  text-align: center;
  font-family:'SaltWritten';
`;

const Navigation = styled.nav`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05), -2px 2px 2px rgba(0, 0, 0, 0.04), 2px 2px 2px rgba(0, 0, 0, 0.05),
    0 0 2px rgba(0, 0, 0, 0.08);
  position: relative;
  margin: 55px 0 0;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 15px 0;
  overflow: visible;
  border-radius: inherit;
  font-family: Merriweather;
  font-weight: 900;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const NavListItem = styled.li`
  flex: 1 0 auto;
  border-bottom: 0;
  border-right: 1px solid #f5f4f2;
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
  padding: 0;
  width: auto;

  @media (max-width: 767px) {
    border-right: none;
    /* border-bottom: 1px solid #f5f4f2; */
    font-size: 14px;
    text-align: center;
    margin-bottom: 15px;
    padding: 0;
    width: auto;

    &:first-of-type {
      margin-top: -55px;
    }

    /* maybe reconsider using "*" */
    &:first-of-type * {
      border-top: 0;
    }
  }
`;

const NavImage = styled.img`
  height: 80px;
  max-height: 80px;
  max-width: 80px;
  margin-right: 0;
  width: 80px;
  object-fit: cover;
  position: relative;
  min-height: initial;
  opacity: 1;
  border-radius: 50px 50px;
  transition: all 300ms;
`;

const NavListImageWrapper = styled.div`
  margin-top: -55px;
  position: relative;

  @media (max-width: 767px) {
    margin-top: 0;
    border-top: 1px solid #f5f4f2;
    padding-top: 20px;
  }
`;

const NavListMainTitle = styled.strong`
  background-color: transparent;
  border: 0;
  font-size: 18px;
  letter-spacing: 0;
  margin-bottom: 15px;
  padding: 0;
  position: relative;
  text-transform: none;
  color: #353535;
  display: block;
  top: 0;
  z-index: 10;
  font-weight: 600;
`;

const NavListMainAnchor = styled.a`
  background-image: linear-gradient(transparent calc(100% - 0.45em), #d8c4c3 0),
    linear-gradient(transparent calc(100% - 0.45em), #c0e2e2 0);
  background-repeat: no-repeat;
  transition: all 0.1s ease-in-out;
  background-size: 0 92%, 100% 92%;
  color: transparent;
  display: inline;
  text-shadow: 0 0 #353535, 0.06em 0 0 rgba(255, 255, 255, 0.7), 0 0.05em 0 rgba(255, 255, 255, 0.7),
    -0.06em 0 0 rgba(255, 255, 255, 0.7);
`;

const NavSubList = styled.ul`
  margin: 0;
  padding: 0 15px;
  width: 100%;

  @media (max-width: 767px) {
    margin: 10px 0 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const NavSubListItem = styled.li`
  position: relative;
  list-style-type: none;

  @media (max-width: 767px) {
    margin-right: 12px;
    flex: 1 1 25%;
  }
`;

const NavSubListItemAnchor = styled.a`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f4f2;
  text-decoration: none;
  border-radius: 20px;
  color: #353535;
  height: 35px;
  padding: 3px;
  position: relative;
  text-align: center;
  transition: background 0.2s;
  white-space: nowrap;
  &:hover {
    background: gainsboro;
  }
`;

//  to do - make column bigger for lists that holds a lot more items then the others

export const CategoryNavigation = () => {
  return (
    <div>
      <div>
        <Title>Pick a destination</Title>
        <Navigation>
          <NavList>
            <NavListItem>
              <NavListImageWrapper>
                {/* <NavImage src="/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp" alt="Asia" /> */}
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="/asia/">Asia</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/bali/" title="Bali">
                    Bali{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/cambodia/" title="Cambodia">
                    Cambodia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/georgia/" title="Georgia">
                    Georgia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/indonesia/" title="Indonesia">
                    Indonesia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/laos/" title="Laos">
                    Laos{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/malaysia/" title="Malaysia">
                    Malaysia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/maldives/" title="Maldives">
                    Maldives{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/myanmar/" title="Myanmar">
                    Myanmar{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/philippines/" title="Philippines">
                    Philippines{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/singapore/" title="Singapore">
                    Singapore{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/sri-lanka/" title="Sri Lanka">
                    Sri Lanka{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/thailand/" title="Thailand">
                    Thailand{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/uzbekistan/" title="Uzbekistan">
                    Uzbekistan{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/vietnam/" title="Vietnam">
                    Vietnam{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem>
              <NavListImageWrapper>
                {/* <NavImage src="/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp" alt="Africa" /> */}
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="/africa/">Africa</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/egypt/" title="Egypt">
                    Egypt{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/mauritius/" title="Mauritius">
                    Mauritius{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/morocco/" title="Morocco">
                    Morocco{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem>
              <NavListImageWrapper>
                {/* <NavImage src="/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp" alt="Europe" /> */}
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="/europe/">Europe</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/czech-republic/" title="Czech Republic">
                    Czech Republic{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/france/" title="France">
                    France{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/georgia/" title="Georgia">
                    Georgia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/hungary/" title="Hungary">
                    Hungary{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/iceland/" title="Iceland">
                    Iceland{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/italy/" title="Italy">
                    Italy{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/netherlands/" title="Netherlands">
                    Netherlands{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/portugal/" title="Portugal">
                    Portugal{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/spain/" title="Spain">
                    Spain{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/turkey/" title="Turkey">
                    Turkey{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem>
              <NavListImageWrapper>
                {/* <NavImage src="/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp" alt="Middle East" /> */}
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="/middle-east/">Middle East</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/egypt/" title="Egypt">
                    Egypt{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/jordan/" title="Jordan">
                    Jordan{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/oman/" title="Oman">
                    Oman{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/turkey/" title="Turkey">
                    Turkey{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem>
              <NavListImageWrapper>
                {/* <NavImage
                  src="/static/12029724ceb06188a69b1dd13dffc0ce/b7f12/pic.webp"
                  alt="South America"
                /> */}
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="/south-america/">South America</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="/peru/" title="Peru">
                    Peru{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
          </NavList>
        </Navigation>
      </div>
    </div>
  );
};
export default CategoryNavigation;
