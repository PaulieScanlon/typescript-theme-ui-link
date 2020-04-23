/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import theme from "../../gatsby-plugin-theme-ui";

export const MrsLinky = ({ children, sx, ...rest }) => (
  <Link sx={{ ...theme.styles.a, ...sx }} {...rest}>
    {children}
  </Link>
);

MrsLinky.propTypes = {
  /** Theme UI JSX pragma */
  sx: PropTypes.any,
  /** The remaining props inherited from GatsbyLinkProps or from AnchorHTMLAttributes */
  rest: PropTypes.any,
};
