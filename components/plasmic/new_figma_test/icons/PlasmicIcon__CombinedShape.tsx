// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShapeIcon(props: CombinedShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M11.273 0h.002v10.166c0 .667-.541 1.208-1.208 1.208H0V1.208A1.204 1.204 0 011.208 0h10.065z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShapeIcon;
/* prettier-ignore-end */
