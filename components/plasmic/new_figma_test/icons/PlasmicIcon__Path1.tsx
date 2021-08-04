// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path1Icon(props: Path1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M2.998 1.384H1.845V.23a.23.23 0 10-.461 0v1.153H.23a.23.23 0 100 .46h1.153v1.154a.23.23 0 10.46 0V1.845h1.154a.23.23 0 100-.461"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path1Icon;
/* prettier-ignore-end */
