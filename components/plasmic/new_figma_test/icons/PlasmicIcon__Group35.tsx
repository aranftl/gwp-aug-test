// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group35Icon(props: Group35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 18"}
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
          "M13.845 4.398V16.84H1V1h9.389c.345 0 .691.115.921.403l2.074 2.074c.346.23.46.576.46.921z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.705"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.965 2.095v1.786h1.785c.404 0 .576-.461.288-.75l-1.324-1.324c-.288-.288-.75-.115-.75.288z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.705"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4.571 8.95h5.472m-1.958 3.973h2.016m-5.53-7.948h2.016"}
        stroke={"currentColor"}
        strokeWidth={"1.137"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group35Icon;
/* prettier-ignore-end */
