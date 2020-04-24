import React from "react";
import { MrQuery } from ".";

export default {
  title: "MrQuery",
  parameters: {
    component: MrQuery,
    componentSubtitle:
      "MrQuery contains a useStaticQuery and graphql... so does it still work in Storybook?",
  },
};

export const usage = () => <MrQuery />;
