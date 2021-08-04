// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle6Icon(props: Rectangle6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 2"}
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
          "M0 .876C0 .392.392 0 .876 0h58.23c.484 0 .876.392.876.876v.875H0V.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle6Icon;
/* prettier-ignore-end */
