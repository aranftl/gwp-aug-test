// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1009IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1009Icon(props: Frame1009IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 9"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1l5.481 5.116a3.016 3.016 0 004.116 0L16.077 1"}
        stroke={"currentColor"}
        strokeWidth={"2.01"}
      ></path>
    </svg>
  );
}

export default Frame1009Icon;
/* prettier-ignore-end */
