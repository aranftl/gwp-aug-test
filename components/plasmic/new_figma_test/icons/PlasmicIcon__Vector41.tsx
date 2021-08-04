// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector41Icon(props: Vector41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 177"}
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
          "M253.707 169.182c0 4.126-3.375 7.501-7.5 7.501H7.501c-4.126 0-7.501-3.375-7.501-7.501V7.501C0 3.375 3.375 0 7.5 0h238.71c4.126 0 7.501 3.375 7.501 7.5v161.682h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector41Icon;
/* prettier-ignore-end */
