// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape4Icon(props: Shape4IconProps) {
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
        d={
          "M.11.622A.365.365 0 11.628.108L1.72 1.207a.365.365 0 01-.002.516L.623 2.815a.365.365 0 01-.516-.518l.838-.834L.11.623z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape4Icon;
/* prettier-ignore-end */
