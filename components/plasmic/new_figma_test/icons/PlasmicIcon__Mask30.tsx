// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask30Icon(props: Mask30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 44"}
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
          "M4.729 8.437h0l11.396-6.609s0 0 0 0a7.533 7.533 0 013.783-1.02c1.303 0 2.608.339 3.783 1.02 0 0 0 0 0 0l11.396 6.61h0c2.417 1.4 3.922 4.036 3.922 6.905v12.895c0 2.869-1.505 5.505-3.922 6.906h0L23.69 41.753h0a7.528 7.528 0 01-3.783 1.022 7.527 7.527 0 01-3.783-1.022h0L4.729 35.144h0C2.312 33.743.807 31.107.807 28.24V15.342c0-2.87 1.505-5.505 3.922-6.906z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.614"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Mask30Icon;
/* prettier-ignore-end */
