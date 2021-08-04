// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendsMarkersLineLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendsMarkersLineLineIcon(
  props: LegendsMarkersLineLineIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M.2 1.209h2.016"}
        stroke={"currentColor"}
        strokeWidth={".403"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default LegendsMarkersLineLineIcon;
/* prettier-ignore-end */
