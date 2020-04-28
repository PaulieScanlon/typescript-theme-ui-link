export default {
  borderWidths: {
    sm: 1,
  },
  colors: {
    text: "#24292E",
    background: "#FFFFFF",
    primary: "#34D058",
    secondary: "#0366D6",
    muted: "#CCCCCC",
    highlight: "#BBFFCD",
    gray: "#808080",
    accent: "#cee5ff",
    darken: "#F7F7F7",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: 1140,
  },
  space: {
    sm: 4,
    md: 8,
    lg: 32,
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    h1: {
      mb: "md",
    },
    p: {
      mb: "lg",
    },
    a: {
      color: "primary",
    },
    hr: {
      color: "muted",
      my: "lg",
    },
  },
  links: {
    color: "primary",
    navigation: {
      color: "text",
      borderRadius: 4,
      textDecoration: "none",
      p: "md",
      transition: ".2s linear background-color",
      ":hover": {
        backgroundColor: "darken",
      },
      "&[aria-current]": {
        color: "secondary",
      },
    },
  },
};
