// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path8Icon(props: Path8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M2.786.225C2.742.089 2.64 0 2.526 0H.282C.167 0 .065.089.02.225a.448.448 0 00.061.397l1.123 1.459a.252.252 0 00.199.107.252.252 0 00.198-.107L2.725.622a.447.447 0 00.06-.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path8Icon;
/* prettier-ignore-end */
