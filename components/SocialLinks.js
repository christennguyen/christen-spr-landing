import React from "react";
import IconLink from "./IconLink";
import styled from "styled-components";

const ICON_COLOR = "olive";
const ICON_SIZE = 20;
const URL_GITHUB = "https://github.com/christennguyen";
const URL_LINKEDIN = "https://www.linkedin.com/in/christennguyen/";
const EMAIL_ADDRESS = "mailto:christen.nguyen@gmail.com";
const URL_RESUME = "https://github.com/christennguyen";

const SocialLinksContainer = styled.div`
  margin-left: auto;
`;
const SocialLinks = () => {
  return (
    <SocialLinksContainer id="social-links-container">
      <IconLink
        icon={"GitHub"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_GITHUB}
        size={ICON_SIZE}
      />
      <IconLink
        icon={"Linkedin"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_LINKEDIN}
        size={ICON_SIZE}
      />
      <IconLink
        icon={"FileText"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={URL_RESUME}
        size={ICON_SIZE}
      />
      <IconLink
        icon={"Inbox"}
        color={ICON_COLOR}
        style={{ marginRight: "30px" }}
        href={EMAIL_ADDRESS}
        size={ICON_SIZE}
      />
    </SocialLinksContainer>
  );
};

export default SocialLinks;
