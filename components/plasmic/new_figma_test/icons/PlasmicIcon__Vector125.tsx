// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector125IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector125Icon(props: Vector125IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M4.8 6.2H1.4C.6 6.2 0 5.6 0 4.8V1.4C0 .6.6 0 1.4 0h3.4c.8 0 1.4.6 1.4 1.4v3.4c0 .8-.6 1.4-1.4 1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector125Icon;
/* prettier-ignore-end */
