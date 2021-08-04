// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask23Icon(props: Mask23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 11"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.376.031c.59-.034 1.179-.03 1.769-.03h2.989c.601 0 1.19-.004 1.78.03a7.34 7.34 0 011.578.241 5.165 5.165 0 010 9.965 7.36 7.36 0 01-1.578.242c-.59.033-1.178.03-1.768.03h-2.99c-.601 0-1.19.003-1.78-.03a7.359 7.359 0 01-1.578-.241 5.164 5.164 0 010-9.965A7.338 7.338 0 015.376.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask23Icon;
/* prettier-ignore-end */
