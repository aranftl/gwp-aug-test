// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask10Icon(props: Mask10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
        cx={"2.034"}
        cy={"2.034"}
        r={"2.034"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask10Icon;
/* prettier-ignore-end */
