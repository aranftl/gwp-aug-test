// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2970IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2970Icon(props: Rectangle2970IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 318 189"}
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

      <path d={"M0 0h317.242v188.939H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Rectangle2970Icon;
/* prettier-ignore-end */
