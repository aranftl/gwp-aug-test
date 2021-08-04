// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector107Icon(props: Vector107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.386 0A.388.388 0 000 .386C0 .6.174.773.386.773A.388.388 0 00.773.386.388.388 0 00.386 0zm0 .697A.315.315 0 11.69.371v.012a.31.31 0 01-.304.314z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector107Icon;
/* prettier-ignore-end */
