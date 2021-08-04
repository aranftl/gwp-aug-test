// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopy2Icon(
  props: BtnPriDrkBgDefaultCopy2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 19"}
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
          "M67.708 1H2.4C1.627 1 1 1.766 1 2.711v14.26c0 .945.627 1.71 1.4 1.71h65.308c.773 0 1.4-.765 1.4-1.71V2.71c0-.945-.627-1.711-1.4-1.711z"
        }
        stroke={"currentColor"}
        strokeWidth={".499"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopy2Icon;
/* prettier-ignore-end */
