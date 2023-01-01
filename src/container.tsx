import React from "react";

import { styled } from "goober";

type Props = {
  backgroundColor: string;
  title: string;
  subtitle?: string;
  src?: string;
};

const Container = ({ backgroundColor, title, subtitle, src }: Props) => {
  const color = backgroundColor;

  return (
    <StyledAnchor href={src} style={{ background: color }}>
      {!src ? (
        <StyledMainTitle>{title}</StyledMainTitle>
      ) : (
        <StyledTitle>{title}</StyledTitle>
      )}
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledAnchor>
  );
};

const StyledAnchor = styled("a")((props) => ({
  borderRadius: props.theme.borderRadius,
  padding: `${props.theme.spacing * 2 + "px"} ${
    props.theme.spacing * 4 + "px"
  }`,
  maxWidth: "500px",
  minWidth: "150px",
  textDecoration: "none",
  flexGrow: 1,
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  transitionDuration: ".3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const StyledTitle = styled("h2")`
  font-size: 24px;
`;
const StyledMainTitle = styled("h1")`
  font-size: 36px;
`;

const StyledSubtitle = styled("span")`
  font-size: 18px;
`;

export default Container;
