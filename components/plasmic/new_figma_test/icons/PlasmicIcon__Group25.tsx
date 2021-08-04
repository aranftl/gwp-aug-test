// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 18"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 17.524l8.376-2.142 7.93-3.623 8.1-3.023 7.929 1.267L41.333 1 49.4 9.945"
        }
        stroke={"currentColor"}
        strokeWidth={".403"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
