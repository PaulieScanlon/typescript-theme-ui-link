import React, { FunctionComponent } from "react";
import { Box, Container, Alert, Divider } from "theme-ui";
import { Location } from "@reach/router";

import { MrLinky } from "../components/MrLinky/MrLinky";

const PageLayout: FunctionComponent = ({ children }) => (
  <Box as="main">
    <Location>
      {({ location }) => {
        const { state }: any = location;

        return (
          <Container>
            <Box
              as="header"
              sx={{
                borderBottomColor: "muted",
                borderBottomStyle: "solid",
                borderBottomWidth: "sm",
                px: "md",
                py: "lg",
                "a:nth-of-type(n)": {
                  mr: "md",
                },
              }}
            >
              <MrLinky to="/" sx={{ variant: "links.navigation" }}>
                Link to index
              </MrLinky>
              <MrLinky to="/page-2" sx={{ variant: "links.navigation" }}>
                Link to page-2
              </MrLinky>
            </Box>
            <Box as="section" sx={{ px: "md", py: "lg" }}>
              {state && state.message ? <Alert>{state.message}</Alert> : null}
              <Divider />

              {children}
            </Box>
          </Container>
        );
      }}
    </Location>
  </Box>
);

export default PageLayout;
