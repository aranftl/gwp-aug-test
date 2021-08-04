// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendMarkersDot6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendMarkersDot6Icon(props: LegendMarkersDot6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
        d={"M1.753 3.506a1.753 1.753 0 100-3.506 1.753 1.753 0 000 3.506z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegendMarkersDot6Icon;
/* prettier-ignore-end */
