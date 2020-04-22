import React from "react";
import { MrLinky } from ".";

export default {
  title: "MrLinky",
  parameters: {
    component: MrLinky,
    componentSubtitle:
      "The MrLinky component is a JSX Fragma enabled Gatsby <Link /> and can still be styled by Theme UI sx",
  },
};

export const usage = () => <MrLinky to="/">Click Me</MrLinky>;

export const sx = () => (
  <MrLinky to="/" sx={{ color: "primary" }}>
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
      storyDescription: "Some `AnchorHTMLAttributes` can still be applied",
    },
  },
};
