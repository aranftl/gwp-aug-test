// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ActiveGrayLine3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ActiveGrayLine3Icon(props: ActiveGrayLine3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 60"}
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
        d={"M.637 58.94V.22"}
        stroke={"currentColor"}
        strokeWidth={".438"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default ActiveGrayLine3Icon;
/* prettier-ignore-end */
