// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse342IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse342Icon(props: Ellipse342IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
        cx={"8.137"}
        cy={"8.137"}
        r={"8.137"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse342Icon;
/* prettier-ignore-end */
