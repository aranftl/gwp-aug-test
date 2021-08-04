// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector57Icon(props: Vector57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M1.232 1.726L.547 0H0l1.09 2.636h.27L2.47 0h-.543l-.695 1.726z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
