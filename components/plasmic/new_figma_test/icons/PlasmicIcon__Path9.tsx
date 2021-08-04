// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path9Icon(props: Path9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M2.564.225C2.524.089 2.43 0 2.326 0H.258C.154 0 .06.089.02.225a.48.48 0 00.056.397l1.033 1.459c.05.071.117.107.183.107.066 0 .132-.036.183-.107L2.508.622a.48.48 0 00.056-.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path9Icon;
/* prettier-ignore-end */
