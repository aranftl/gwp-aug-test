// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group42Icon(props: Group42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 15"}
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
          "M2 14.449V2h14.227c.561 0 1.123.187 1.404.562l3.182 3.088c.375.375.562.843.562 1.404v7.395"
        }
        stroke={"currentColor"}
        strokeWidth={"3.016"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.976 3.59v2.622h2.715c.561 0 .842-.75.468-1.124l-2.06-1.965c-.374-.375-1.123-.094-1.123.468z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3.016"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M7.335 12.483h8.33z"} fill={"currentColor"}></path>

      <path
        d={"M7.335 12.483h8.33"}
        stroke={"currentColor"}
        strokeWidth={"2.011"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M7.335 7.985h5.242z"} fill={"currentColor"}></path>

      <path
        d={"M7.335 7.985h5.242"}
        stroke={"currentColor"}
        strokeWidth={"2.011"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group42Icon;
/* prettier-ignore-end */
