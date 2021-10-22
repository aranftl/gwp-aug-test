// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse18Icon(props: Ellipse18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 764 764"}
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

      <circle cx={"382"} cy={"382"} r={"382"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse18Icon;
/* prettier-ignore-end */
