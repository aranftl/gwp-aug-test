// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask53Icon(props: Mask53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
        d={"M9.236 18.472A9.236 9.236 0 109.236 0a9.236 9.236 0 000 18.472z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask53Icon;
/* prettier-ignore-end */
