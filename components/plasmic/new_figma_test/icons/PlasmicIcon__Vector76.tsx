// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector76Icon(props: Vector76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
        d={"M2.198 3.08L.976 0H0l1.945 4.702h.481L4.406 0h-.969l-1.24 3.08z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector76Icon;
/* prettier-ignore-end */
