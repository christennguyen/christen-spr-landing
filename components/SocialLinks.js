import React from "react";
import IconLink from "./IconLink";
import styled from "styled-components";

const ICON_COLOR = "olive";
const URL_GITHUB = "https://github.com/christennguyen";
const URL_LINKEDIN = "https://www.linkedin.com/in/christennguyen/";
const EMAIL_ADDRESS = "mailto:christen.nguyen@gmail.com";
const URL_RESUME = "https://github.com/christennguyen";

const SocialLinksContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
`;
const SocialLinks = () => {
  return (
    <SocialLinksContainer id="social-links-container">
      <IconLink
        icon={"GitHub"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_GITHUB}
      />
      <IconLink
        icon={"Linkedin"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_LINKEDIN}
      />
      <IconLink
        icon={"FileText"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_RESUME}
      />
      <IconLink
        icon={"Inbox"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={EMAIL_ADDRESS}
      />
    </SocialLinksContainer>
  );
};

export default SocialLinks;
