// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector94IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector94Icon(props: Vector94IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 82"}
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
          "M41.003 0c22.634 0 41.003 18.35 41.003 40.96s-18.37 40.961-41.003 40.961S0 63.571 0 40.961 18.37 0 41.003 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector94Icon;
/* prettier-ignore-end */
