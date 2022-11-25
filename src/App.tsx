import React from "react";

import { styled } from "goober";
import Container from "./container";

import { createGlobalStyles } from "goober/global";
import { theme } from "./theme";
import ImageContainer from "./image-container";

const GlobalStyles = createGlobalStyles`
  html,
  body {
    font-color: white;
    font-family: 'poppins', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

const Links = [
  {
    title: "Musical Cards",
    src: "https://bkallaus.github.io/musical-cards",
    backgroundColor: theme.color.dark,
  },

  {
    title: "Quick Calculations",
    src: "https://bkallaus.github.io/quick",
    backgroundColor: theme.color.dark,
  },
  {
    title: "Espresso Time",
    src: "https://bkallaus.github.io/espresso-time",
    backgroundColor: theme.color.dark,
  },
  {
    title: "LinkedIn",
    src: "https://www.linkedin.com/in/benjamin-kallaus-b242b781/",
    backgroundColor: theme.color.light,
  },
  {
    title: "Github",
    src: "https://github.com/bkallaus",
    backgroundColor: theme.color.light,
  },
  {
    title: "benkallaus@gmail.com",
    src: "mailto:benkallaus@gmail.com",
    backgroundColor: theme.color.light,
  },
];

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <StyledDiv>
        <Container
          key="title"
          title="Ben Kallaus"
          backgroundColor={theme.color.primary}
        />
        <Container
          key="title"
          title="Software Developer"
          backgroundColor={theme.color.primary}
        />
        <ImageContainer />
        {Links.map((link) => (
          <Container key={link.title} {...link} />
        ))}
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing}px;
  margin: ${(props) => props.theme.spacing * 2}px;
`;

export default App;
