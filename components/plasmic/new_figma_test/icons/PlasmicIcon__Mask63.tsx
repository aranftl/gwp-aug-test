// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask63Icon(props: Mask63IconProps) {
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
        cx={"4.057"}
        cy={"4.057"}
        r={"4.057"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask63Icon;
/* prettier-ignore-end */
