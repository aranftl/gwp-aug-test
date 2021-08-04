// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LineCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LineCopyIcon(props: LineCopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 714"}
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
        d={"M1.236 1.5v711"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default LineCopyIcon;
/* prettier-ignore-end */
