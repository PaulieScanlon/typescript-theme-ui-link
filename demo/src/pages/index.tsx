import React from "react";
import { Box, Heading, Text } from "theme-ui";

const IndexPage = () => (
  <Box>
    <Heading>This is the index </Heading>
    <Text>
      The links in the header are MrLink (The TypeScript version of a Gatsby
      Link)
    </Text>
    <Text>
      When a link is blue it's because it's reconizing it's the current route.
      You can see the styles in <Box as="code">src/gatsby-plugin-theme-ui</Box>
    </Text>
    <Box as="pre">
      <Box as="code">
        {`
          a: {
            color: "text",
            textDecoration: "none",
            "&[aria-current]": {
              color: "secondary",
            },
          },
        `}
      </Box>
    </Box>
  </Box>
);

export default IndexPage;
