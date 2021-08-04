// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomScreen4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomScreen4Icon(props: BottomScreen4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 552 23"}
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
          "M551.713 0v5.885c0 8.97-7.34 16.31-16.311 16.31H16.312C7.34 22.196 0 14.856 0 5.886V0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomScreen4Icon;
/* prettier-ignore-end */
