// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector127Icon(props: Vector127IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 554 387"}
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
          "M553.977 369.787c0 9.316-7.622 16.938-16.938 16.938h-520.1C7.621 386.725 0 379.103 0 369.787V16.938C0 7.622 7.622 0 16.939 0h520.106c9.316 0 16.939 7.622 16.939 16.939v352.848h-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector127Icon;
/* prettier-ignore-end */
