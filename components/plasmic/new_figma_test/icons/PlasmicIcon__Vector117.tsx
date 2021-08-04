// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector117Icon(props: Vector117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 3"}
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

      <path d={"M4.7 2.5L5.2 0H.5L0 2.5h4.7z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector117Icon;
/* prettier-ignore-end */
