/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import { FunctionComponent, AnchorHTMLAttributes } from "react";
import { Link, GatsbyLinkProps } from "gatsby";

import theme from "../../gatsby-plugin-theme-ui";

export interface MrLinkyProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    GatsbyLinkProps<{}> {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp;
}

export const MrLinky: FunctionComponent<MrLinkyProps> = ({
  children,
  to,
  sx,
  ...rest
}) => (
  <Link
    to={to}
    sx={{ ...theme.styles.a, ...sx }}
    {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
  >
    {children}
  </Link>
);
