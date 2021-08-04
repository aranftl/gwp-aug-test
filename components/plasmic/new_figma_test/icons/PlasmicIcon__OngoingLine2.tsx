// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OngoingLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OngoingLine2Icon(props: OngoingLine2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 104 1"}
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
        d={"M1 .182h102.722"}
        stroke={"currentColor"}
        strokeWidth={".365"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default OngoingLine2Icon;
/* prettier-ignore-end */
