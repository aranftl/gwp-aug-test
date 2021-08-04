// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line274IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line274Icon(props: Line274IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1136 2"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".3"}
        stroke={"currentColor"}
        strokeWidth={"1.005"}
        d={"M0 1.497h1135.86"}
      ></path>
    </svg>
  );
}

export default Line274Icon;
/* prettier-ignore-end */
