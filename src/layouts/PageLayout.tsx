import React, { FunctionComponent } from "react";
import { Box, Container } from "theme-ui";

import { MrLinky } from "../components/MrLinky/MrLinky";

const PageLayout: FunctionComponent = ({ children }) => (
  <Box as="main">
    <Container>
      <Box
        as="header"
        sx={{
          px: "md",
          py: "lg",
          "a:nth-of-type(n)": {
            mr: "md",
          },
        }}
      >
        <MrLinky to="/">Link to index</MrLinky>
        <MrLinky to="/page-2" sx={{ color: "primary" }}>
          Link to page-2
        </MrLinky>
      </Box>
      <Box as="section" sx={{ px: "md", py: "lg" }}>
        {children}
      </Box>
    </Container>
  </Box>
);

export default PageLayout;
