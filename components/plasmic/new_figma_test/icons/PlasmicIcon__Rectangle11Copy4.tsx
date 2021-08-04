// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11Copy4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Copy4Icon(props: Rectangle11Copy4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 11"}
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
          "M0 1.753C0 .785.785 0 1.753 0h52.916v10.079H1.754A1.753 1.753 0 010 8.326V1.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle11Copy4Icon;
/* prettier-ignore-end */
