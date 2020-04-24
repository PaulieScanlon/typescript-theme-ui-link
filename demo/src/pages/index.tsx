import React from "react";
import { Box, Heading, Text } from "theme-ui";

const IndexPage = () => (
  <Box>
    <Heading as="h1" variant="styles.h1">
      This is the index{" "}
    </Heading>
    <Text as="p" variant="styles.p">
      The links in the header are MrLink (The TypeScript version of a Gatsby
      Link)
    </Text>
    <Text as="p" variant="styles.p">
      When a link is{" "}
      <Text as="span" sx={{ color: "secondary" }}>
        blue
      </Text>{" "}
      it's because the component understands it's the current route. You can see
      the styles in <Box as="code">src/gatsby-plugin-theme-ui</Box>
    </Text>
  </Box>
);

export default IndexPage;
