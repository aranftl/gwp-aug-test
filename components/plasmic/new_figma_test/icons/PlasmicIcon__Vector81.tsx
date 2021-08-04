// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector81Icon(props: Vector81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={
          "M.282.124C.282.044.227 0 .129 0H0v.402h.096V.24l.113.156h.12L.198.23A.112.112 0 00.282.124zM.105.179H.089V.074h.017C.154.074.18.09.18.126.179.16.161.179.112.179H.105z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector81Icon;
/* prettier-ignore-end */
