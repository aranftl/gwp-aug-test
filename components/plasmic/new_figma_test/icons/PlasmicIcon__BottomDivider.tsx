// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomDividerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomDividerIcon(props: BottomDividerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 202 1"}
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
        d={"M0 0h201.135a.201.201 0 010 .403H.403A.403.403 0 010 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomDividerIcon;
/* prettier-ignore-end */
