// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill12Icon(props: Fill12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M0 0h.63v2.457h.015l.954-1.038h.807l-1.09 1.115 1.159 1.352H1.64L.645 2.62H.629v1.265H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill12Icon;
/* prettier-ignore-end */
