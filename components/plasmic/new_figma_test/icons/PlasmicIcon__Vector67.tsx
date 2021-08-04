// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector67Icon(props: Vector67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 71"}
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
          "M35.1 0c19.374 0 35.099 15.725 35.099 35.1 0 19.374-15.725 35.099-35.1 35.099C15.725 70.199 0 54.474 0 35.099 0 15.725 15.725 0 35.1 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector67Icon;
/* prettier-ignore-end */
