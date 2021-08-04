// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1954IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1954Icon(props: Group1954IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 34"}
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
        d={"M2 18.69C2 11.532 8.096 5.761 15.658 5.761"}
        stroke={"currentColor"}
        strokeWidth={"2.533"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10.513 2l5.144 3.603-3.806 4.87"}
        stroke={"currentColor"}
        strokeWidth={"3.76"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M22.448 7.514c6.559 3.58 8.796 11.469 5.015 17.677"}
        stroke={"currentColor"}
        strokeWidth={"2.533"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M33.05 22.658l-6.029 2.46-2.598-5.608"}
        stroke={"currentColor"}
        strokeWidth={"3.76"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M22.37 30.085c-6.56 3.506-14.893 1.242-18.597-4.967"}
        stroke={"currentColor"}
        strokeWidth={"2.533"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3.156 30.839l.78-5.721 6.043.738"}
        stroke={"currentColor"}
        strokeWidth={"3.76"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1954Icon;
/* prettier-ignore-end */
