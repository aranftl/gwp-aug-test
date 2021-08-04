// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendMarkersDot2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendMarkersDot2Icon(props: LegendMarkersDot2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M.806 1.612A.806.806 0 10.806 0a.806.806 0 000 1.612z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegendMarkersDot2Icon;
/* prettier-ignore-end */
