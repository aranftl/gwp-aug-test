// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector53Icon(props: Vector53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M.736 0H0v2.57h.732c.389 0 .67-.092.916-.298a1.29 1.29 0 00.467-.986C2.115.528 1.552 0 .735 0zm.585 1.93c-.157.142-.362.205-.686.205H.5v-1.7h.135c.324 0 .52.058.686.208a.885.885 0 010 1.287z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */
