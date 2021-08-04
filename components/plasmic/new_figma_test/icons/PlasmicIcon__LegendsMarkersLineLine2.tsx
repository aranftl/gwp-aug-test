// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendsMarkersLineLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendsMarkersLineLine2Icon(
  props: LegendsMarkersLineLine2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
        d={"M.365 2.188H4.01"}
        stroke={"currentColor"}
        strokeWidth={".729"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default LegendsMarkersLineLine2Icon;
/* prettier-ignore-end */
