// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopy4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopy4Icon(
  props: BtnPriDrkBgDefaultCopy4IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 96 26"}
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
          "M93.105 1H2.932C1.865 1 1 2.058 1 3.363V23.05c0 1.305.865 2.363 1.932 2.363h90.173c1.067 0 1.932-1.058 1.932-2.363V3.363c0-1.305-.865-2.363-1.932-2.363z"
        }
        stroke={"currentColor"}
        strokeWidth={".688"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopy4Icon;
/* prettier-ignore-end */
