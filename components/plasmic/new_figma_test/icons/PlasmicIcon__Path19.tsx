// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path19Icon(props: Path19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M3.082.27C3.034.106 2.92 0 2.795 0H.31C.185 0 .072.106.024.27A.577.577 0 00.09.748l1.242 1.753c.06.085.14.128.22.128.08 0 .159-.043.22-.128L3.013.748A.576.576 0 003.082.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path19Icon;
/* prettier-ignore-end */
