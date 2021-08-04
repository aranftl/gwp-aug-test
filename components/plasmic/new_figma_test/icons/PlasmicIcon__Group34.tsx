// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group34Icon(props: Group34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 9"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 8.543V1h8.621c.34 0 .68.113.85.34l1.93 1.872c.226.227.34.51.34.85v4.481"
        }
        stroke={"currentColor"}
        strokeWidth={"1.828"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.075 1.964v1.588h1.645c.34 0 .51-.454.283-.68L10.756 1.68c-.227-.227-.681-.057-.681.283z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.828"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M4.231 7.352H9.28z"} fill={"currentColor"}></path>

      <path
        d={"M4.231 7.352H9.28"}
        stroke={"currentColor"}
        strokeWidth={"1.218"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M4.231 4.627h3.176z"} fill={"currentColor"}></path>

      <path
        d={"M4.231 4.627h3.176"}
        stroke={"currentColor"}
        strokeWidth={"1.218"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group34Icon;
/* prettier-ignore-end */
