import React from "react";
import { MrLinky } from ".";

export default {
  title: "MrLinky",
  parameters: {
    component: MrLinky,
    componentSubtitle:
      "MrLinky is TypeScript component and is a JSX pragma enabled Gatsby <Link /> and can still be styled by Theme UI sx",
  },
};

export const usage = () => <MrLinky to="/">Click Me</MrLinky>;

export const sx = () => (
  <MrLinky to="/" sx={{ color: "secondary" }}>
    Some Link
  </MrLinky>
);

sx.story = {
  parameters: {
    docs: {
      storyDescription: "The `sx` prop can be used to style the link",
    },
  },
};

export const attributes = () => (
  <MrLinky to="/" title="Mr Linky">
    Some Link
  </MrLinky>
);

attributes.story = {
  parameters: {
    docs: {
      storyDescription:
        "Legitimate `AnchorHTMLAttributes` can still be applied",
    },
  },
};

export const variant = () => (
  <MrLinky
    to="/"
    sx={{
      variant: "links.navigation",
    }}
  >
    Some Link
  </MrLinky>
);

variant.story = {
  parameters: {
    docs: {
      storyDescription: "Use `variant` type via the `sx`",
    },
  },
};
