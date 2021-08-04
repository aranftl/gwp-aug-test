// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask11Icon(props: Mask11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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

      <circle
        cx={"1.356"}
        cy={"1.356"}
        r={"1.356"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask11Icon;
/* prettier-ignore-end */
