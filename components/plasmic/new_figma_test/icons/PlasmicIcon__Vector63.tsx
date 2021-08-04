// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector63Icon(props: Vector63IconProps) {
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
          "M.199 0A.2.2 0 000 .199a.2.2 0 00.199.198A.2.2 0 00.397.2.2.2 0 00.2 0zm0 .358A.162.162 0 11.354.191v.006A.16.16 0 01.2.358z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector63Icon;
/* prettier-ignore-end */
