// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1956IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1956Icon(props: Group1956IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 33"}
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
        d={"M1 18.69C1 11.532 7.096 5.761 14.658 5.761"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9.516 2l5.143 3.603-3.806 4.87"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21.445 7.516c6.56 3.579 8.797 11.468 5.016 17.676"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M32.049 22.656l-6.029 2.46-2.598-5.608"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21.369 30.085c-6.559 3.506-14.892 1.242-18.596-4.967"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M2.157 30.839l.78-5.72 6.043.737"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1956Icon;
/* prettier-ignore-end */
