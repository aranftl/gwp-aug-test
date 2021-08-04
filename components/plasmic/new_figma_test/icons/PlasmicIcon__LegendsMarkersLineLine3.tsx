// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendsMarkersLineLine3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendsMarkersLineLine3Icon(
  props: LegendsMarkersLineLine3IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
        d={"M.438 2.63H4.82"}
        stroke={"currentColor"}
        strokeWidth={".876"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default LegendsMarkersLineLine3Icon;
/* prettier-ignore-end */
