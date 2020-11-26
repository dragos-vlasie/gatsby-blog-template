import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import Wave from '../elements/Wave';

const encodedSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' preserveAspectRatio='none'%3E%3Cpath d='M13.7.3C12-.1 10-.2 8.3.6c-1.3.7-2.2 1.7-3.1 3-1.3 1.9-2.7 3.8-3.5 6.1C.8 12 .5 14.5.3 17c-.2 2.2-.4 4.5-.2 6.8s1.1 4.5 2.6 6c2.9 2.8 9.5 2.5 13.3 1.8 3.1-.5 6.2-1 9-2.5 3.5-1.8 4.4-5.1 5.7-9.1 1.6-4 2.3-13.1-1.5-15.6-4.5-2.9-10.3-3-15.5-4.1z'/%3E%3C/svg%3E%0A\")";

const Wrapper = styled.header`
  /* background: ${props => props && props.theme.gradient.rightToLeft}; */
  /* min-height: ${props => (props.big ? '650px' : '550px')};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: ${props => (props.big ? '600px' : '500px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: ${props => (props.big ? '500px' : '325px')};
  } */
  height: ${props => (props.type === '' ? '500px' : 'auto')};
  z-index: ${props => (props.homePage ? 0 : 1)};

  margin-bottom: ${props => (props.homePage ? '0' /* sau -210px */ : 0)};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: ${props => (props.homePage ? 0 : 0)};
  }
  /* position: relative;
  overflow: hidden; */

      flex-shrink: 0;
    // padding: 0 15px;
    position: relative;

    .category.page-cover__container::after {
      background-color: #f7f7f7;
    bottom: 0;
    content: "";
    left: 0;
    -webkit-mask-image: url('https://www.saltinourhair.com/build/images/bubbles.png');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 500px auto;
    mask-size: 500px auto;
    position: absolute;
    right: 0;
    top: 30px;
    -webkit-mask-position: top center;
    mask-position: top center;
    z-index: 1;
    }
    .category.page-cover__container {
      background: url('https://www.saltinourhair.com/build/images/bubbles.png');

    margin-top: 85px;
    padding-top: 0;
    margin-bottom: 25px;
    text-align: center;
    position: relative;
    z-index: 97;
    display: block;
    min-height: auto;

    h1 {
    font-size: 100px;
    margin: 50px 0 10px;
    color: #353535;
    line-height: 1.3;
    font-family: 'headings',Arial;
    font-weight: 700;
}

    .basic-category__subtitle {
    font-family: Montserrat,Arial;
    max-width: 380px;
    margin: 0 auto 1em;
    padding: 0 15px;
}
}
    }
    .page-cover__container {

    min-height: 650px;

    @media (min-width: 1024px) {
    display: flex;
    min-height: 650px;
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 60px;
    
    }
}

 .page-cover {
    mask-repeat: no-repeat;
    mask-position: bottom center;
    mask-size: 150% 130%;
    height: 64vh;
    left: -15px;
    position: relative;
    transform: scaleX(-1);
    width: calc(100% + 30px);
    mask-image: ${encodedSvg};

    @media(min-width: 1024px) {
      
    mask-size: 107% 120%;
    
    /* mask-size: 140% 120%; */
    /* -webkit-mask-size: 107% 120%; */
    left: 41%;
    margin-left: 40px;
    mask-position: bottom left;
    height: 100%;
    max-height: 100vh;
    min-height: 650px;
    position: absolute;
    top: 0;
    transform: scaleX(1);
    width: calc((99.2vw - (40% + 40px)) - ((100vw - 100%)/2));
    }
    }

    .page-cover__image {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);}

    .page-cover__image {
    background-repeat: no-repeat;}

    .page-cover__image {
    height: 100%;
    position: absolute;
    width: 100%;
}


  /* .gatsby-image-wrapper {
    height: 650px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 400px;
    .gatsby-image-wrapper {
      height: 400px;
    }
  } */

  .post-cover__content {
    width: 100%;
    margin-top: 20px;
    padding: 0 15px;

    @media(min-width: 1024px) {
    margin-top: 100px;
    padding-top: 60px;
    width: 41%;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
}
  }


.post-cover__content-container {
    display: flex;
    flex-direction: column-reverse;
}

h1 {
  font-size: 60px;
    line-height: 1.1em;
    color: white;
    line-height: 1.2em;
    order: 2;
    font-family: 'Headings';
    font-weight: 800;
    letter-spacing: -.5px;
    transition: color .2s linear;
    max-width: 100%;
    margin-top: 0;
    margin-left: -2px;
}

.post-cover__intro {
    font-size: 20px;
    padding-right: 35px;
    font-style: italic;
    font-size: 18px;
    order: 3;
}
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled(animated.p)`
  max-width: 650px;
  color: ${props => props.theme.colors.white.blue};
  font-style: italic;
`;

const PostCoverIntro = styled.div`
  font: 18px/1.85 Merriweather, Georgia, sans-serif;
  text-rendering: optimizeLegibility;
  font-style: italic;
  color: #353535;
`;

const HomePage = ({ cover, big, homePage, title, titleProps, date, subProps, children }) => {
  console.log('HomePage -> cover', cover);
  return (
    <Wrapper big={true} homePage={homePage}>
      <Img fluid={cover || {} || [] || ''} />
      <Text>
        <animated.h1 data-testid="header-title" style={titleProps}>
          {title}
        </animated.h1>
        <animated.h3 data-testid="header-title" style={subProps}>
          {date}
        </animated.h3>

        {children && <Subtitle style={subProps}>{children}</Subtitle>}
      </Text>
      <Wave orientation={'bottom'} />
    </Wrapper>
  );
};

const Post = ({ cover, big, homePage, title, titleProps, date, subProps, children }) => {
  return (
    <Wrapper big={true}>
      <div class="page-cover__container">
        <div class="page-cover blog-bubble-mask">
          <div class="page-cover__image">
            <Img fluid={cover || {} || [] || ''} />
          </div>
        </div>
        <div class="post-cover__content">
          <div class="post-cover__content-container">
            <animated.h1 data-testid="header-title" style={titleProps}>
              {title}
            </animated.h1>
            <PostCoverIntro class="post-cover__intro">
              <p>
                Brno, Prague’s little brother, is the Czech Republic’s best-kept city secret. It’s much quieter than{' '}
                <a href="https://www.saltinourhair.com/czech-republic/prague/" target="_blank" rel="noopener">
                  Prague
                </a>
                , despite being the second-largest city in the country, and there is a fantastic local vibe. What’s
                more, its huge student population gives it a contemporary, vibrant, energetic feeling that is different
                from other more medieval cities in the Czech Republic. Visit in summer, for fun pop-up wine bars and
                festivals, and visit in winter for legendary Christmas markets. Here are all the top things to do in
                Brno in 24 hours.
              </p>
            </PostCoverIntro>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const TitleHeader = ({ title, titleProps }) => {
  return (
    <Wrapper big={true}>
      <div className="category page-cover__container basic-category">
        <animated.h1 data-testid="header-title">{title}</animated.h1>
        <p className="basic-category__subtitle">
          Travel Guides & information and advice on destinations all over the world. These are the travel blogs from
          Salt in our Hair.
        </p>
      </div>
    </Wrapper>
  );
};
const Header = props => {
  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  const subProps = useSpring({
    config: config.slow,
    delay: 400,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div>
      {props.type === 'home' ? (
        <HomePage {...props} titleProps={titleProps} subProps={subProps} />
      ) : props.type === 'post' ? (
        <Post {...props} subProps={subProps} titleProps={titleProps} />
      ) : (
        <TitleHeader {...props} subProps={subProps} titleProps={titleProps} />
      )}
    </div>
    // <Wrapper big={true} homePage={homePage}>
    //   <div class="page-cover__container">
    //     <div class="page-cover blog-bubble-mask">
    //       <div class="page-cover__image">
    //         <Img fluid={cover || {} || [] || ''} />
    //       </div>
    //     </div>
    //     <div class="post-cover__content">
    //       <div class="post-cover__content-container">
    //         <animated.h1 data-testid="header-title" style={titleProps}>
    //           {title}
    //         </animated.h1>
    //         <div class="post-cover__intro">
    //           <p>
    //             Brno, Prague’s little brother, is the Czech Republic’s best-kept city secret. It’s much quieter than{' '}
    //             <a href="https://www.saltinourhair.com/czech-republic/prague/" target="_blank" rel="noopener">
    //               Prague
    //             </a>
    //             , despite being the second-largest city in the country, and there is a fantastic local vibe. What’s
    //             more, its huge student population gives it a contemporary, vibrant, energetic feeling that is different
    //             from other more medieval cities in the Czech Republic. Visit in summer, for fun pop-up wine bars and
    //             festivals, and visit in winter for legendary Christmas markets. Here are all the top things to do in
    //             Brno in 24 hours.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Wrapper>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
  big: false,
};
