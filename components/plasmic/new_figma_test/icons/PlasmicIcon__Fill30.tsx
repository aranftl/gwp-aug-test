// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill30Icon(props: Fill30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.457.855a.388.388 0 010-.777c.213 0 .385.174.385.389a.388.388 0 01-.385.388zm0-.855a.456.456 0 100 .913.456.456 0 000-.913zM.37.426V.28h.084c.048 0 .101.014.101.07 0 .062-.06.076-.111.076H.37zM.646.348C.646.237.552.196.456.196h-.18v.517h.091V.497h.067l.12.216h.112L.528.487C.6.47.646.422.646.347z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill30Icon;
/* prettier-ignore-end */
