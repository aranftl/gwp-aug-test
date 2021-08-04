// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector101IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector101Icon(props: Vector101IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 6"}
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
        d={"M2.398 3.36L1.065 0H0l2.121 5.13h.526L4.807 0H3.75L2.398 3.36z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector101Icon;
/* prettier-ignore-end */
