import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Link, Heading } from "@theme-ui/components";

const IndexPage = () => (
  <Box>
    <Heading>This is the index </Heading>
    <Link as={GatsbyLink} to="/page-2" sx={{ color: "primary" }}>
      Link to page-2
    </Link>
  </Box>
);

export default IndexPage;
