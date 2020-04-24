import React from "react";
import styled from "styled-components";
import { scrollToBottom } from "../static/js/utilities";
const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  margin-left: 30px;
  margin-top: 30px;
`;
const NavLink = styled.a`
  margin-right: 37px;
  color: #43a2a2;
  text-decoration: none;
  border-bottom: 1px solid #43a2a2;

  &:visited: {
    color: #43a2a2;
  }

  &:hover {
    border-bottom: none;
    background-image: url("/static/images/squiggle-animated.svg");
    background-position: 0 calc(100% - 1.5px);
    background-size: auto 3px;
    background-repeat: repeat-x;
    padding-bottom: 3px;
  }
`;

const NavContainer = styled.nav`
  margin-top: 30px;
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <Flex>
      <Logo src={"/static/images/logo.png"} height={90} />
      <NavContainer>
        <NavLink onClick={scrollToBottom}>about</NavLink>
        <NavLink href={""}>cv</NavLink>
        <NavLink href={"mailto:christen.nguyen@gmail.com"}>email</NavLink>
      </NavContainer>
    </Flex>
  );
};

export default NavBar;
