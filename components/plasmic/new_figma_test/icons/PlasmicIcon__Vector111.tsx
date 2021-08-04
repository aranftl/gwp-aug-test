// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector111Icon(props: Vector111IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 47"}
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
          "M23.032 46.065c12.721 0 23.033-10.312 23.033-23.032C46.065 10.311 35.753 0 23.033 0 10.311 0 0 10.312 0 23.032c0 12.721 10.312 23.033 23.032 23.033z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector111Icon;
/* prettier-ignore-end */
