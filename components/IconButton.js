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

const IconButton = ({ icon, color, style, onClick, size }) => {
  const FeatherIcon = Icon[icon];

  return (
    <IconContainer>
      <FeatherIcon color={color} style={style} size={size} onClick={onClick} />
    </IconContainer>
  );
};

export default IconButton;
