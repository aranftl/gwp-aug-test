// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector102IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector102Icon(props: Vector102IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
        d={"M0 5h2.767v-.846H.976v-1.35H2.7v-.847H.976V.847h1.79V0H0v5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector102Icon;
/* prettier-ignore-end */
