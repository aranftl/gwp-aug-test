// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector69Icon(props: Vector69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 12"}
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
        d={"M1 1l13.104 9.079L26.927 1"}
        stroke={"currentColor"}
        strokeWidth={"2.011"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector69Icon;
/* prettier-ignore-end */
