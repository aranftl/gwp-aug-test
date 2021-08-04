// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector71Icon(props: Vector71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 9"}
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
        d={"M24.89 0S15.74 6.018 0 8.731h23.89a1 1 0 001-1.001V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector71Icon;
/* prettier-ignore-end */
