// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeroImageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeroImageIcon(props: HeroImageIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 348 349"}
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
        cx={"174"}
        cy={"174.269"}
        rx={"174"}
        ry={"174.269"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default HeroImageIcon;
/* prettier-ignore-end */
