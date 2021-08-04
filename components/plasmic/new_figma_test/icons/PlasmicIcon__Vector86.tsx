// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector86Icon(props: Vector86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
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
          "M19.364 38.727c10.694 0 19.363-8.67 19.363-19.363C38.727 8.669 30.057 0 19.364 0 8.669 0 0 8.67 0 19.364s8.67 19.363 19.364 19.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector86Icon;
/* prettier-ignore-end */
