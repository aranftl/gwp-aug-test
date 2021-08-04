// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask9Icon(props: Mask9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
        cx={"4.069"}
        cy={"4.069"}
        r={"4.069"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask9Icon;
/* prettier-ignore-end */
