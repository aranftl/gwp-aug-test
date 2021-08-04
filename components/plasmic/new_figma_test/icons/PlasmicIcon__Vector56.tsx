// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector56Icon(props: Vector56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M0 1.345a1.33 1.33 0 001.32 1.34h.036c.219 0 .434-.05.629-.148v-.591c-.199.199-.379.282-.606.282-.504 0-.863-.366-.863-.887A.854.854 0 011.34.46h.016c.24 0 .42.085.629.289v-.59A1.35 1.35 0 000 1.345z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector56Icon;
/* prettier-ignore-end */
