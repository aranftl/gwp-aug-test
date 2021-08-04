// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask70Icon(props: Mask70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 4.378A4.383 4.383 0 014.378 0a4.383 4.383 0 014.379 4.378 4.383 4.383 0 01-4.379 4.379A4.383 4.383 0 010 4.378zm.873.005a3.507 3.507 0 003.503 3.503 3.507 3.507 0 003.503-3.503A3.507 3.507 0 004.376.881 3.507 3.507 0 00.873 4.383zm3.504 1.31a.438.438 0 100 .876.438.438 0 000-.876m0-3.5c-.602 0-1.126.41-1.274.996a.438.438 0 00.849.215.445.445 0 01.425-.335c.24 0 .438.196.438.437 0 .006.003.01.003.016s-.003.011-.003.016a.218.218 0 01-.121.197l-.513.255a.438.438 0 00-.242.392v.438a.438.438 0 10.875 0v-.167l.272-.136c.373-.187.604-.562.604-1.01 0-.725-.59-1.314-1.313-1.314"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask70Icon;
/* prettier-ignore-end */
