// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1953IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1953Icon(props: Group1953IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 37"}
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
        d={"M2 20.916C2 12.803 8.909 6.263 17.479 6.263"}
        stroke={"currentColor"}
        strokeWidth={"2.237"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11.649 2l5.829 4.084-4.314 5.518"}
        stroke={"currentColor"}
        strokeWidth={"3.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M25.173 8.25c7.434 4.056 9.97 12.997 5.685 20.033"}
        stroke={"currentColor"}
        strokeWidth={"2.237"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M37.19 25.413L30.357 28.2l-2.945-6.357"}
        stroke={"currentColor"}
        strokeWidth={"3.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M25.085 33.83C17.652 37.804 8.207 35.237 4.01 28.2"}
        stroke={"currentColor"}
        strokeWidth={"2.237"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3.312 34.684l.883-6.483 6.85.836"}
        stroke={"currentColor"}
        strokeWidth={"3.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1953Icon;
/* prettier-ignore-end */
