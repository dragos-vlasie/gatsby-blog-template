import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  @media (max-width: 956px) {
    display: none;
  }
`;

const Navigation = styled.div`
  &.hidden {
    opacity: 1;
    pointer-events: all;
  }
  width: 930px;
  background: #fff;
  border-radius: 4px;
  flex-flow: column wrap;
  height: auto;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05), -2px 2px 2px rgba(0, 0, 0, 0.06), 2px 2px 2px rgba(0, 0, 0, 0.12),
    0 0 2px rgba(0, 0, 0, 0.08);
  max-height: 500px;
  margin-top: 60px;
  padding: 25px 10px 60px;
  transform: translateY(-3px);
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-content: flex-start;
  overflow: auto;
  position: absolute;
  top: 0;
  z-index: -10;
  transition: opacity 0.2s, transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;

  @media (max-width: 956px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: calc(100vh - 108px);
    left: 0;
    margin-top: 80px;
    overflow: auto;
    padding: 0 15px 140px;
    position: absolute;
    top: 0;
    z-index: 0;
    max-height: 100vh;
    width: 100%;
    flex-flow: column;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: rgb(53, 53, 53);
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: 956px) {
    display: none;
    &.hidden {
      display: flex;
      flex-wrap: wrap;

      a {
        margin-right: 2rem;
        margin-left: 0;
        justify-content: end;
      }
    }
  }
`;

const Title = styled.h3`
  margin: 40px auto 20px auto;
  text-align: center;
  font-family: 'SaltWritten';
`;

const NavListItem = styled.div`
  padding: 0 15px;
  width: 50%;
  @media (max-width: 956px) {
    width: 100%;
    padding: 0;
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
  background-color: #fff;
  border-bottom: 1px solid #f5f4f2;
  color: #353535;
  font-family: headings, Arial;
  display: block;
`;

const NavListMainAnchor = styled.a`
  display: block;
  position: relative;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
`;

const NavSubList = styled.ul`
  margin: 10px 0 20px;
  display: inline-grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  width: 100%;
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
  font-family: headings, Arial;
  justify-content: center;
  align-items: center;
  background-color: #f5f4f2;
  text-decoration: none;
  border-radius: 20px;
  color: #353535;
  height: 35px;
  padding: 3px;
  font-size: 14px;
  position: relative;
  text-align: center;
  transition: background 0.2s;
  white-space: nowrap;
  &:hover {
    background: gainsboro;
  }
`;

const MobileButton = styled.button`
  display: none;
  @media (max-width: 956px) {
    display: block;
    height: 50px;
    width: 50px;
  }
`;

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const setVisibility = () => {
    if (window && window.innerWidth > 600) {
      setIsShown(false);
    }
  };
  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <Nav className={`${isShown ? 'hidden' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">The Journal</Link>
        <Link onMouseEnter={() => setIsShown(true)} to="/destinations">
          Destinations
        </Link>
        <Link to="/about">Resources</Link>
        <Link to="/about">Inspire</Link>
      </Nav>
      <MobileButton onClick={() => setIsShown(!isShown)} />
      <StyledLink to="/">
        <img src={logo} alt="Gatsby Logo" />
      </StyledLink>
      <Navigation onMouseLeave={() => setVisibility()} className={`${isShown ? 'hidden' : ''}`}>
        <NavListItem>
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
      </Navigation>
    </Headroom>
  );
};

export default NavBar;
