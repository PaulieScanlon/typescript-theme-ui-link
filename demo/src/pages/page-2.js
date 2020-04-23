import React from "react";
import { Box, Heading, Text } from "theme-ui";

import { MrsLinky } from "../components/MrsLinky";

const PageTwo = () => (
  <Box>
    <Heading>This is page 2</Heading>
    <Text>
      This page is JavaScript and below is MrsLink (The JavaScript version of a
      Gatsby Link)
    </Text>
    <MrsLinky to="/" sx={{ color: "muted" }}>
      Back
    </MrsLinky>
  </Box>
);

export default PageTwo;
