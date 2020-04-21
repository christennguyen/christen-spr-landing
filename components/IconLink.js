import React from "react";
import * as Icon from "react-feather";
import styled from "styled-components";

const IconContainer = styled.a`
  :hover > svg path,
  :hover > svg rect,
  :hover > svg circle,
  :hover > svg polyline,
  :hover > svg line {
    stroke: orange;
  }
`;

const IconLink = ({ icon, color, style, href }) => {
  const FeatherIcon = Icon[icon];
  return (
    <IconContainer href={href}>
      <FeatherIcon color={color} style={style} />
    </IconContainer>
  );
};

export default IconLink;
