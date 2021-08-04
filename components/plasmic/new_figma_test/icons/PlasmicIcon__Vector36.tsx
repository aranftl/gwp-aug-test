// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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

      <path
        d={"M2.512 5.024a2.512 2.512 0 100-5.024 2.512 2.512 0 000 5.024z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
