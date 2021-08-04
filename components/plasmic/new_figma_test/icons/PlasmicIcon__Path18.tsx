// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path18Icon(props: Path18IconProps) {
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
          "M3.348.27C3.296.106 3.173 0 3.036 0H.337C.201 0 .077.106.026.27a.538.538 0 00.073.478l1.35 1.753a.303.303 0 00.238.128.303.303 0 00.238-.128L3.275.748A.537.537 0 003.348.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path18Icon;
/* prettier-ignore-end */
