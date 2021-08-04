// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector58Icon(props: Vector58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
        d={"M0 2.57h1.422v-.435h-.92V1.44h.886v-.435H.501v-.57h.92V0H0v2.57z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
