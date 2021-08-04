// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopy6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopy6Icon(
  props: BtnPriDrkBgDefaultCopy6IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 154 35"}
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
          "M149.576 1H4.117C2.396 1 1 2.413 1 4.156v26.297c0 1.743 1.396 3.156 3.117 3.156h145.459c1.722 0 3.117-1.413 3.117-3.156V4.156c0-1.743-1.395-3.156-3.117-3.156z"
        }
        stroke={"currentColor"}
        strokeWidth={".931"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopy6Icon;
/* prettier-ignore-end */
