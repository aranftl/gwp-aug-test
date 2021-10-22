// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask76Icon(props: Mask76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 50.512c13.538 0 24.512-10.974 24.512-24.512S39.538 1.488 26 1.488 1.488 12.462 1.488 26 12.462 50.512 26 50.512z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.024"}
      ></path>
    </svg>
  );
}

export default Mask76Icon;
/* prettier-ignore-end */
