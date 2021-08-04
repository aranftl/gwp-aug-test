// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector39Icon(props: Vector39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 258 181"}
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
          "M257.169 171.202c0 4.919-4.024 8.943-8.943 8.943H8.943c-4.919 0-8.943-4.024-8.943-8.943V8.943C0 4.024 4.024 0 8.943 0H248.23c4.919 0 8.943 4.024 8.943 8.943v162.259h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */
