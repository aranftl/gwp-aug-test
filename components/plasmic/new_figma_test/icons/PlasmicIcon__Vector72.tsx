// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector72Icon(props: Vector72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
        d={
          "M1.312 0H0v4.583h1.305c.694 0 1.196-.163 1.635-.531a2.299 2.299 0 00.832-1.759C3.772.943 2.768 0 1.312 0zm1.045 3.443c-.281.253-.646.365-1.224.365h-.24V.776h.24c.578 0 .928.104 1.224.372.317.294.496.708.494 1.14.002.438-.177.855-.494 1.155z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector72Icon;
/* prettier-ignore-end */
