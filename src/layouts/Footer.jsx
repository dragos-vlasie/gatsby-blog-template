import React from 'react';
import styled from '@emotion/styled';
import Wave from '../elements/Wave';
import SocialIcons from '../components/SocialIcons';

const Wrapper = styled.footer`
  margin-top: 80px;
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  /* background: ${props => props.theme.gradient.leftToRight}; */
  background: #f0e8e7;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  padding-top: 7rem;
  .sitemap {
    @media (max-width: 756px) {
      flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
        max-width: 1100px;
        margin: auto;
      /* ul {
        width: 30%;
      } */
    }
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: black;
  display: flex;
    justify-content: space-between;
  /* color: ${props => props.theme.colors.white.light}; */
`;

const Copyright = styled.div`
  color: ${props => props.theme.tint.blueWhite};
  font-size: 0.9rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0.5rem;
  }
`;

const List = styled.ul`
  padding-right: 8px;
  flex: 1 0;

  &::first-of-type {
    font-weight: 400;
  }
  a {
    font-weight: 100;
  }
`;

const Footer = () => (
  <Wrapper>
    <Wave orientation={'top'} />
    <nav style={{ display: 'flex' }} className="sitemap" aria-label="Sitemap">
      <List>
        <li>
          <a href="/travel-blog/" title="Travel Blogs">
            Travel Blogs
          </a>
        </li>
        <li>
          <a href="/bali/bali-route-guide/" title="Bali Travel Guide">
            Bali Travel Guide
          </a>
        </li>
        <li>
          <a href="/sri-lanka/sri-lanka-route-guide/" title="Sri Lanka Travel Guide">
            Sri Lanka Travel Guide
          </a>
        </li>
        <li>
          <a href="/peru/peru-travel-guide/" title="Peru Travel Guide">
            Peru Travel Guide
          </a>
        </li>
      </List>
      <List>
        <li>
          <a href="/tips/" title="Tips &amp; Tricks">
            Tips &amp; Tricks
          </a>
        </li>
        <li>
          <a href="/tips/start-travel-blog/" title="Start a Travel Blog">
            Start a Travel Blog
          </a>
        </li>
        <li>
          <a href="/tips/reduce-plastic-travel/" title="Reduce travel plastic">
            Reduce travel plastic
          </a>
        </li>
        <li>
          <a href="/tips/camera-travel-photography/" title="Our Photography Gear">
            Our Photography Gear
          </a>
        </li>
      </List>
      <List>
        <li>
          <a href="/about-us/" title="About us">
            About us
          </a>
        </li>
        <li>
          <a href="/about-us/" title="Our story">
            Our story
          </a>
        </li>
        <li>
          <a href="/work-with-us/" title="Work with us">
            Work with us
          </a>
        </li>
      </List>
      <List>
        <li>
          <a href="#" title="Shop">
            Shop
          </a>
        </li>
        <li>
          <a href="/presets/" title="Lightroom Presets">
            Lightroom Presets
          </a>
        </li>
        <li>
          <a href="/ebooks/" title="Ebooks">
            Ebooks
          </a>
        </li>
      </List>
      <List>
        <li>
          <span>Contact</span>
        </li>
        <li>
          <a href="mailto:ask@saltinourhair.com" target="_blank" title="Email us">
            ask@saltinourhair.com
          </a>
        </li>
        <li>
          <SocialIcons />
        </li>
      </List>
    </nav>
    <Text>
      <a href="/">Travel Alma</a>
      <a href="/ro">Romanian Version</a>
      <Copyright>Copyright © 2019. Dragos Vlasie.</Copyright>
    </Text>
  </Wrapper>
);
export default Footer;
