// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShape3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShape3Icon(props: CombinedShape3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M2.627 0a2.61 2.61 0 00-1.469.449A2.619 2.619 0 000 2.627v22.106h21.891a2.627 2.627 0 002.627-2.627V0H2.627z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShape3Icon;
/* prettier-ignore-end */
