import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Link, Heading } from "@theme-ui/components";

const PageTwo = () => (
  <Box>
    <Heading>This is page 2</Heading>
    <Link as={GatsbyLink} to="/">
      Back to index
    </Link>
  </Box>
);

export default PageTwo;
