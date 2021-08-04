// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.425 2.504H3.338V.417a.417.417 0 10-.834 0v2.087H.417a.417.417 0 100 .834h2.087v2.087a.417.417 0 10.834 0V3.338h2.087a.417.417 0 100-.834"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
