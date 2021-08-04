// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector68Icon(props: Vector68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 22"}
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
        d={"M24.276 2l3.65 2.153v15.63H2V4.154L5.65 2"}
        stroke={"currentColor"}
        strokeWidth={"3.016"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector68Icon;
/* prettier-ignore-end */
