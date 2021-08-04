// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask57Icon(props: Mask57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 55"}
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
          "M5.943 10.604h0l14.322-8.307s0 0 0 0a9.466 9.466 0 014.755-1.283c1.638 0 3.278.427 4.755 1.283 0 0 0 0 0 0l14.321 8.307h0c3.038 1.76 4.93 5.073 4.93 8.679v16.206c0 3.606-1.892 6.918-4.93 8.68h0l-14.321 8.305h0a9.462 9.462 0 01-4.755 1.284 9.46 9.46 0 01-4.755-1.284h0L5.944 44.17h0c-3.039-1.762-4.93-5.074-4.93-8.68V19.284c0-3.606 1.891-6.918 4.93-8.68z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.029"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Mask57Icon;
/* prettier-ignore-end */
