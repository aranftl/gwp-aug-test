// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle283IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle283Icon(props: Rectangle283IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 345 194"}
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
        d={"M0 8a8 8 0 018-8h329a8 8 0 018 8v185.389H0V8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle283Icon;
/* prettier-ignore-end */
