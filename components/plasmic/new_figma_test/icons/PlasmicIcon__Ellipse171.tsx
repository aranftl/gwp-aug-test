// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse171IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse171Icon(props: Ellipse171IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 520 520"}
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

      <circle cx={"260"} cy={"260"} r={"260"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse171Icon;
/* prettier-ignore-end */
