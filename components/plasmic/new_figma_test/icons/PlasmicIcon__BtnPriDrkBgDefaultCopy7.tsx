// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopy7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopy7Icon(
  props: BtnPriDrkBgDefaultCopy7IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 129 35"}
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
        d={
          "M125.612 1H3.614C2.17 1 1 2.431 1 4.196v26.638c0 1.765 1.17 3.196 2.614 3.196h121.998c1.444 0 2.615-1.431 2.615-3.197V4.197c0-1.765-1.171-3.196-2.615-3.196z"
        }
        stroke={"currentColor"}
        strokeWidth={".931"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopy7Icon;
/* prettier-ignore-end */
