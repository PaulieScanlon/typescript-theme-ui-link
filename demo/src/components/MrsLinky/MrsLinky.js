/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import theme from "../../gatsby-plugin-theme-ui";

export const MrsLinky = ({ children, to, sx, ...rest }) => (
  <Link to={to} sx={{ ...theme.styles.a, ...sx }} {...rest}>
    {children}
  </Link>
);

MrsLinky.propTypes = {
  /** Gatsby internal route */
  to: PropTypes.string.isRequired,
  /** Theme UI JSX pragma */
  sx: PropTypes.any,
  /** Inherited props from AnchorHTMLAttributes and GatsbyLinkProps  */
  rest: PropTypes.any,
};
