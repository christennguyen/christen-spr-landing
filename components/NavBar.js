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
  color: olive;
  text-decoration: none;
`;

const NavContainer = styled.nav`
  margin-top: 10px;
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <Flex>
      <Logo src={"/static/images/logo.png"} height={90} />
      <NavContainer>
        <span
          style={{ color: "olive", marginRight: "37px" }}
          onClick={scrollToBottom}
        >
          about
        </span>
        <NavLink href={""}>cv</NavLink>
        <NavLink href={"mailto:christen.nguyen@gmail.com"}>email</NavLink>
      </NavContainer>
    </Flex>
  );
};

export default NavBar;
