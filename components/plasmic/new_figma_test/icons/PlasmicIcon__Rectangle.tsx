// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangleIcon(props: RectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 249 164"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 5.972A5.972 5.972 0 015.972 0h236.273a5.972 5.972 0 015.972 5.972V163.65H0V5.972z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RectangleIcon;
/* prettier-ignore-end */
