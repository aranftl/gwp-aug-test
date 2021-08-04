// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector88Icon(props: Vector88IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 461 322"}
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
          "M460.974 307.706c0 7.752-6.343 14.094-14.095 14.094H14.095C6.343 321.8 0 315.458 0 307.706V14.095C0 6.343 6.343 0 14.095 0h432.789c7.752 0 14.095 6.343 14.095 14.095v293.611h-.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector88Icon;
/* prettier-ignore-end */
