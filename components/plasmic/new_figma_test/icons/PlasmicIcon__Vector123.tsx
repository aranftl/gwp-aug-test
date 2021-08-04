// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector123IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector123Icon(props: Vector123IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 36"}
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
        d={"M17.854 36H0V0h32v20.791L17.854 36z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector123Icon;
/* prettier-ignore-end */
