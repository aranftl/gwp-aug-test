// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector75Icon(props: Vector75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
        d={
          "M0 2.4a2.372 2.372 0 002.355 2.39h.064c.39 0 .774-.09 1.121-.265V3.471c-.354.354-.675.503-1.08.503-.9 0-1.539-.653-1.539-1.581A1.524 1.524 0 012.391.818h.028c.427 0 .75.153 1.121.516V.282A2.293 2.293 0 002.44 0 2.41 2.41 0 000 2.38v.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector75Icon;
/* prettier-ignore-end */
