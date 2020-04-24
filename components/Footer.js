import React from "react";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  z-index: 2;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Flex>
        <p className="p-footer" style={{ margin: "5px 0 0 20px" }}>
          &copy; 2020 All Rights Reserved | Site Created by Christen Nguyen /
          Designed by {"                            "}
          <a
            href="http://www.vivelavivitron.com/"
            style={{ textDecoration: "none" }}
          >
            Vivian Johnston
          </a>
        </p>

        <SocialLinks />
      </Flex>
    </FooterContainer>
  );
};

export default Footer;
