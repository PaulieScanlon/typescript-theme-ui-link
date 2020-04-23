import React from "react";
import { MrsLinky } from ".";

export default {
  title: "MrsLinky",
  parameters: {
    component: MrsLinky,
    componentSubtitle:
      "MrsLinky is JavaScript component and is JSX pragma enabled Gatsby <Link /> and can still be styled by Theme UI sx",
  },
};

export const usage = () => <MrsLinky to="/">Click Me</MrsLinky>;

export const sx = () => (
  <MrsLinky to="/" sx={{ color: "primary" }}>
    Some Link
  </MrsLinky>
);

sx.story = {
  parameters: {
    docs: {
      storyDescription: "The `sx` prop can be used to style the link",
    },
  },
};

export const attributes = () => (
  <MrsLinky to="/" title="Mr Linky">
    Some Link
  </MrsLinky>
);

attributes.story = {
  parameters: {
    docs: {
      storyDescription:
        "Legitimate `AnchorHTMLAttributes` can still be applied",
    },
  },
};
