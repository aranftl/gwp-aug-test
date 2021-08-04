// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BgRectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BgRectangleIcon(props: BgRectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 318 96"}
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
          "M309.273 0H8.617A8.617 8.617 0 000 8.617v87.29h317.89V8.617A8.617 8.617 0 00309.273 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BgRectangleIcon;
/* prettier-ignore-end */
