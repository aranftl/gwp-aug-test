// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 18"}
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
          "M2 17.575V14.56C2 7.694 7.694 2 14.56 2c6.866 0 12.56 5.694 12.56 12.56v3.014"
        }
        stroke={"currentColor"}
        strokeWidth={"3.368"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
