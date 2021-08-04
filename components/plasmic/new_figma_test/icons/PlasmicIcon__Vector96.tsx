// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector96Icon(props: Vector96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 10"}
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
          "M27.154 0S17.17 6.565 0 9.525h26.061c.604 0 1.093-.49 1.093-1.092V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector96Icon;
/* prettier-ignore-end */
