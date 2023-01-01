import React from "react";

import { styled } from "goober";
import { theme } from "./theme";

type Props = {
  backgroundColor: string;
  title: string;
  subtitle?: string;
  src?: string;
};

const ImageContainer = () => {
  return (
    <StyledAnchor>
      <StyledImage src="./headshot.jpg" />
    </StyledAnchor>
  );
};

const StyledImage = styled("img")`
  object-fit: cover;
  object-position: top;
  height: 100%;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const StyledAnchor = styled("a")((props) => ({
  borderRadius: props.theme.borderRadius,
  maxWidth: "500px",
  minWidth: "150px",
  textDecoration: "none",
  maxHeight: "350px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  transitionDuration: ".3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

export default ImageContainer;
