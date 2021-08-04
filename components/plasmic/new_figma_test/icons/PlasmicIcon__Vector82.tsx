// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector82Icon(props: Vector82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.354 0A.355.355 0 000 .354a.355.355 0 00.708 0A.355.355 0 00.354 0zm0 .64a.289.289 0 11.278-.3v.01a.284.284 0 01-.278.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector82Icon;
/* prettier-ignore-end */
