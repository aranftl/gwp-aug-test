// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector70Icon(props: Vector70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 74 74"}
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
          "M36.996 0c20.422 0 36.997 16.557 36.997 36.958 0 20.4-16.575 36.958-36.997 36.958S0 57.359 0 36.958C0 16.558 16.574 0 36.996 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector70Icon;
/* prettier-ignore-end */
