import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Box, Heading, Text } from "theme-ui";

export const MrQuery: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          info
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { info },
    },
  } = data;

  return (
    <Box>
      <Heading as="h2" variant="styles.h2">
        Mr Query
      </Heading>
      <Text as="p" variant="styles.p">
        {info}
      </Text>
    </Box>
  );
};
