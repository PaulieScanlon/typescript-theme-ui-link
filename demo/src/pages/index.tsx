import React from "react";
import { Box, Heading, Text, Divider, Flex } from "theme-ui";
import { MrLinky } from "../components/MrLinky";

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
    <Divider />

    <Text as="p" variant="styles.p">
      Use state to set a state message in `@reach/router` location.state
    </Text>

    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <MrLinky to="/" state={{ message: "Hello" }}>
        Hello
      </MrLinky>

      <MrLinky to="/" state={{ message: "Bonjour" }}>
        Bonjour
      </MrLinky>
    </Flex>
  </Box>
);

export default IndexPage;
