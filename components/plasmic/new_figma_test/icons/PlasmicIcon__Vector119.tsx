// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector119IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector119Icon(props: Vector119IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 31"}
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
        d={
          "M29.9 7.7l-4.2 20.9H2L7.2 2h16.9c.7 0 1.4.2 1.7.7l3.5 3.5c.5.3.7.9.6 1.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector119Icon;
/* prettier-ignore-end */
