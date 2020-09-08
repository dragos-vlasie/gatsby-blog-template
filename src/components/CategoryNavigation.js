import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h3`
  margin: 40px auto 20px auto;
  text-align: center;
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
  font-family: headings, Arial;
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

    &:first-child {
      margin-top: -55px;
    }

    /* maybe reconsider using "*" */
    &:first-child * {
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

  @media (max-width: 767px) {
    margin-right: 12px;
    flex: 1 1 25%;
  }
`;

const NavSubListItemAnchor = styled.a`
  padding: 5px;
  align-items: center;
  background-color: #f5f4f2;
  border-radius: 20px;
  color: #353535;
  display: block;
  height: 35px;
  padding: 3px;
  position: relative;
  text-align: center;
  transition: background 0.2s;
  white-space: nowrap;
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
                <NavImage
                  src="https://www.saltinourhair.com/wp-content/uploads/2020/05/saltinourhair-asia-163x163.jpg"
                  alt="Asia"
                />
              </NavListImageWrapper>
              <NavListMainTitle class="page-nav__sub-continent">
                <NavListMainAnchor href="https://www.saltinourhair.com/asia/">Asia</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/bali/" title="Bali">
                    Bali{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/cambodia/" title="Cambodia">
                    Cambodia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/georgia/" title="Georgia">
                    Georgia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/indonesia/" title="Indonesia">
                    Indonesia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/laos/" title="Laos">
                    Laos{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/malaysia/" title="Malaysia">
                    Malaysia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/maldives/" title="Maldives">
                    Maldives{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/myanmar/" title="Myanmar">
                    Myanmar{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/philippines/" title="Philippines">
                    Philippines{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/singapore/" title="Singapore">
                    Singapore{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/sri-lanka/" title="Sri Lanka">
                    Sri Lanka{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/thailand/" title="Thailand">
                    Thailand{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/uzbekistan/" title="Uzbekistan">
                    Uzbekistan{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/vietnam/" title="Vietnam">
                    Vietnam{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem class="page-nav__subcontainer-continent page-nav__subcontainer-continent--africa">
              <NavListImageWrapper>
                <NavImage
                  src="https://www.saltinourhair.com/wp-content/uploads/2020/05/saltinourhair-egypt-africa-163x163.jpg"
                  alt="Africa"
                />
              </NavListImageWrapper>
              <NavListMainTitle class="page-nav__sub-continent">
                <NavListMainAnchor href="https://www.saltinourhair.com/africa/">Africa</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/egypt/" title="Egypt">
                    Egypt{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/mauritius/" title="Mauritius">
                    Mauritius{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/morocco/" title="Morocco">
                    Morocco{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem class="page-nav__subcontainer-continent page-nav__subcontainer-continent--europe">
              <NavListImageWrapper>
                <NavImage
                  src="https://www.saltinourhair.com/wp-content/uploads/2019/06/italy-travel-itinerary-163x120.jpg"
                  alt="Europe"
                />
              </NavListImageWrapper>
              <NavListMainTitle class="page-nav__sub-continent">
                <NavListMainAnchor href="https://www.saltinourhair.com/europe/">Europe</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor
                    class="page-nav__sub-link"
                    href="https://www.saltinourhair.com/czech-republic/"
                    title="Czech Republic"
                  >
                    Czech Republic{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/france/" title="France">
                    France{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/georgia/" title="Georgia">
                    Georgia{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/hungary/" title="Hungary">
                    Hungary{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/iceland/" title="Iceland">
                    Iceland{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/italy/" title="Italy">
                    Italy{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/netherlands/" title="Netherlands">
                    Netherlands{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/portugal/" title="Portugal">
                    Portugal{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/spain/" title="Spain">
                    Spain{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/turkey/" title="Turkey">
                    Turkey{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem class="page-nav__subcontainer-continent page-nav__subcontainer-continent--middle-east">
              <NavListImageWrapper>
                <NavImage
                  src="https://www.saltinourhair.com/wp-content/uploads/2020/05/DSC6685-1-bew-smaller-130x163.jpg"
                  alt="Middle East"
                />
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="https://www.saltinourhair.com/middle-east/">Middle East</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/egypt/" title="Egypt">
                    Egypt{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/jordan/" title="Jordan">
                    Jordan{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/oman/" title="Oman">
                    Oman{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/turkey/" title="Turkey">
                    Turkey{' '}
                  </NavSubListItemAnchor>
                </NavSubListItem>
              </NavSubList>
            </NavListItem>
            <NavListItem class="page-nav__subcontainer-continent page-nav__subcontainer-continent--south-america">
              <NavListImageWrapper>
                <NavImage
                  src="https://www.saltinourhair.com/wp-content/uploads/2020/04/Santa-Catalina-arequipa-peru-2-130x163.jpg"
                  alt="South America"
                />
              </NavListImageWrapper>
              <NavListMainTitle>
                <NavListMainAnchor href="https://www.saltinourhair.com/south-america/">South America</NavListMainAnchor>
              </NavListMainTitle>
              <NavSubList>
                <NavSubListItem>
                  <NavSubListItemAnchor href="https://www.saltinourhair.com/peru/" title="Peru">
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
