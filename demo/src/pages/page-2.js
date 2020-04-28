import React from "react";
import { Box, Heading, Text } from "theme-ui";

import { MrsLinky } from "../components/MrsLinky";

const PageTwo = () => (
  <Box>
    <Heading as="h1" variant="styles.h1">
      This is page 2
    </Heading>
    <Text as="p" variant="styles.p">
      This page is JavaScript and below is MrsLink (The JavaScript version of a
      Gatsby Link)
    </Text>
    <MrsLinky to="/">Back</MrsLinky>
  </Box>
);

export default PageTwo;
