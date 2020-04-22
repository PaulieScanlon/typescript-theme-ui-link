export default {
  colors: {
    text: "#24292E",
    background: "#FFFFFF",
    primary: "#34D058",
    secondary: "#0366D6",
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
    a: {
      color: "text",
      "&[aria-current]": {
        color: "secondary",
      },
    },
  },
};
