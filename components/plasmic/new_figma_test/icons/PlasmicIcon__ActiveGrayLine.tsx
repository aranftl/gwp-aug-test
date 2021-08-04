// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ActiveGrayLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ActiveGrayLineIcon(props: ActiveGrayLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 28"}
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
        d={"M.293 27.104V.1"}
        stroke={"currentColor"}
        strokeWidth={".202"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default ActiveGrayLineIcon;
/* prettier-ignore-end */
