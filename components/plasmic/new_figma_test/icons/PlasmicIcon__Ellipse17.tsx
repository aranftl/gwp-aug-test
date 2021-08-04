// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse17Icon(props: Ellipse17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 528 527"}
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

      <ellipse
        cx={"263.731"}
        cy={"263.395"}
        rx={"263.731"}
        ry={"263.395"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse17Icon;
/* prettier-ignore-end */
