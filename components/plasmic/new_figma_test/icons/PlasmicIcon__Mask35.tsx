// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask35Icon(props: Mask35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
        cx={"6.457"}
        cy={"6.457"}
        r={"6.457"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask35Icon;
/* prettier-ignore-end */
