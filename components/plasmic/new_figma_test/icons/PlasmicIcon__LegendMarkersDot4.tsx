// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendMarkersDot4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendMarkersDot4Icon(props: LegendMarkersDot4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M1.459 2.917a1.459 1.459 0 100-2.917 1.459 1.459 0 000 2.917z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegendMarkersDot4Icon;
/* prettier-ignore-end */
