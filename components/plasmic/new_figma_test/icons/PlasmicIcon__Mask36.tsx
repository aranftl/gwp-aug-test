// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask36Icon(props: Mask36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
        cx={"3.228"}
        cy={"3.228"}
        r={"3.228"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask36Icon;
/* prettier-ignore-end */
