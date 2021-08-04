// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector87IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector87Icon(props: Vector87IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 466 326"}
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
          "M465.354 309.794c0 8.9-7.282 16.183-16.183 16.183H16.183c-8.9 0-16.183-7.283-16.183-16.183V16.183C0 7.283 7.282 0 16.183 0h432.993c8.901 0 16.183 7.282 16.183 16.183v293.611h-.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector87Icon;
/* prettier-ignore-end */
