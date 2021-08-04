// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask16Icon(props: Mask16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M2.577.442c.54.54.583 1.39.132 1.982l1.258 1.258a.201.201 0 11-.285.285L2.424 2.709a1.507 1.507 0 01-1.982-.132 1.512 1.512 0 010-2.135 1.512 1.512 0 012.135 0zM.726.727A1.108 1.108 0 102.292 2.29 1.108 1.108 0 00.726.727z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask16Icon;
/* prettier-ignore-end */
