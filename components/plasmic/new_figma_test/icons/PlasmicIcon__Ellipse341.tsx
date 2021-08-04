// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse341IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse341Icon(props: Ellipse341IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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

      <circle cx={"4.8"} cy={"4.8"} r={"4.8"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse341Icon;
/* prettier-ignore-end */
