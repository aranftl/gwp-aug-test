// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopy3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopy3Icon(
  props: BtnPriDrkBgDefaultCopy3IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 26"}
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
          "M110.817 1H3.304C2.03 1 1 2.044 1 3.332V22.77c0 1.288 1.031 2.332 2.304 2.332h107.513c1.273 0 2.304-1.044 2.304-2.332V3.332c0-1.288-1.031-2.332-2.304-2.332z"
        }
        stroke={"currentColor"}
        strokeWidth={".688"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopy3Icon;
/* prettier-ignore-end */
