// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse170IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse170Icon(props: Ellipse170IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 440 440"}
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

      <circle cx={"220"} cy={"220"} r={"220"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse170Icon;
/* prettier-ignore-end */
