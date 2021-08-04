// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle4Icon(props: Rectangle4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 2"}
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
          "M0 .729C0 .326.326 0 .729 0h48.455c.402 0 .728.326.728.729v.728H0V.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle4Icon;
/* prettier-ignore-end */
