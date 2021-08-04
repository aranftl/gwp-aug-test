// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group43Icon(props: Group43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 31"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 7.815v21.287H2V2h16.081c.592 0 1.184.197 1.579.69l3.551 3.548c.592.394.79.985.79 1.577z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.921"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.066 3.875V6.93h3.058c.691 0 .987-.789.494-1.281l-2.27-2.267c-.493-.493-1.282-.197-1.282.493z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.921"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.116 15.6h9.373m-3.355 6.803h3.453M8.116 8.8h3.453"}
        stroke={"currentColor"}
        strokeWidth={"1.947"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group43Icon;
/* prettier-ignore-end */
