import React from 'react';
import styled from '@emotion/styled';

const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SocialsItem = styled.div`
  position: relative;
  margin-left: 12px;
`;

const SocialsLink = styled.div`
  align-items: center;
  color: #f5f4f2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 32px;
  height: 1em;
  justify-content: center;
  text-align: center;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  width: 1em;
`;

const SocialsIconRound = styled.div`
  font-size: 1em;
  left: 0;
  position: absolute;
  top: 0;
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

const SocialsIconBrand = styled.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  color: #353535;
  font-size: 0.5em;
  position: relative;
  z-index: 1;
`;

export const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <Socials>
        <SocialsItem>
          <SocialsLink
            href="https://www.instagram.com/saltinourhair/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram Salt in our Hair"
          >
            <SocialsIconRound>
              <svg viewBox="0 0 32 32" id="icon-round-shape" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8.2C13.2-.6 6.8.7 3.3 5.1.9 8 .3 12 .1 15.7c-.2 3.9 0 8.1 2.4 11.2 2.5 3.4 6.7 4.9 10.9 5 5.4.1 5.3.6 9.3-.8 5-1.7 9.2-6.9 9.3-12.2.1-2.1-.1-6.6-.8-8.6 0 0-2.6-8.6-12.4-10.1z"></path>
              </svg>
            </SocialsIconRound>
            <SocialsIconBrand>
              <svg viewBox="0 0 32 32" id="icon-instagram" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55a4.952 4.952 0 011.837 1.194 5.015 5.015 0 011.2 1.838c.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.463s-.019 4.781-.094 6.463c-.069 1.563-.331 2.406-.55 2.969a4.94 4.94 0 01-1.194 1.837 5.02 5.02 0 01-1.837 1.2c-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.463.094s-4.781-.019-6.463-.094c-1.563-.069-2.406-.331-2.969-.55a4.952 4.952 0 01-1.838-1.194 5.02 5.02 0 01-1.2-1.837c-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.463s.019-4.781.094-6.463c.069-1.563.331-2.406.55-2.969a4.964 4.964 0 011.194-1.838 5.015 5.015 0 011.838-1.2c.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.463-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.837 1.85a7.833 7.833 0 00-1.85 2.831C.444 6.538.169 7.7.094 9.4.019 11.113 0 11.656 0 16s.019 4.887.094 6.594c.075 1.7.35 2.869.744 3.881.413 1.056.956 1.95 1.85 2.837a7.82 7.82 0 002.831 1.844c1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.594.094s4.888-.019 6.594-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.406 1.944-.956 2.831-1.844s1.438-1.781 1.844-2.831c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.869-.744-3.881a7.506 7.506 0 00-1.831-2.844A7.82 7.82 0 0026.482.843C25.463.449 24.301.174 22.601.099c-1.712-.081-2.256-.1-6.6-.1z"></path>
                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219A8.221 8.221 0 0016 7.781zm0 13.55a5.331 5.331 0 110-10.663 5.331 5.331 0 010 10.663zM26.462 7.456a1.919 1.919 0 11-3.838 0 1.919 1.919 0 013.838 0z"></path>
              </svg>
            </SocialsIconBrand>
          </SocialsLink>
        </SocialsItem>
        <SocialsItem>
          <SocialsLink
            href="https://www.instagram.com/saltinourhair/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram Salt in our Hair"
          >
            <SocialsIconRound>
              <svg viewBox="0 0 32 32" id="icon-round-shape" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8.2C13.2-.6 6.8.7 3.3 5.1.9 8 .3 12 .1 15.7c-.2 3.9 0 8.1 2.4 11.2 2.5 3.4 6.7 4.9 10.9 5 5.4.1 5.3.6 9.3-.8 5-1.7 9.2-6.9 9.3-12.2.1-2.1-.1-6.6-.8-8.6 0 0-2.6-8.6-12.4-10.1z"></path>
              </svg>
            </SocialsIconRound>
            <SocialsIconBrand>
              <svg viewBox="0 0 32 32" id="icon-youtube" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.681 9.6s-.313-2.206-1.275-3.175C29.187 5.15 27.825 5.144 27.2 5.069c-4.475-.325-11.194-.325-11.194-.325h-.012s-6.719 0-11.194.325c-.625.075-1.987.081-3.206 1.356C.631 7.394.325 9.6.325 9.6s-.319 2.588-.319 5.181v2.425c0 2.587.319 5.181.319 5.181s.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563.244 10.881.319 10.881.319s6.725-.012 11.2-.331c.625-.075 1.988-.081 3.206-1.356.962-.969 1.275-3.175 1.275-3.175s.319-2.587.319-5.181v-2.425c-.006-2.588-.325-5.181-.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
              </svg>
            </SocialsIconBrand>
          </SocialsLink>
        </SocialsItem>
      </Socials>
    </div>
  );
};
export default SocialIcons;
