// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GetSupportIconOutline2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GetSupportIconOutline2Icon(
  props: GetSupportIconOutline2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
          "M34.426 30.343H6.024A4.028 4.028 0 012 26.32V6.024C2 3.834 3.834 2 6.024 2h28.343a4.028 4.028 0 014.024 4.024V26.26c.059 2.308-1.716 4.083-3.965 4.083zm-14.199 0v8.107m-12.132 0h24.32"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.215 12.117L24.31 16.2l-6.095 4.024v-8.107z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GetSupportIconOutline2Icon;
/* prettier-ignore-end */
