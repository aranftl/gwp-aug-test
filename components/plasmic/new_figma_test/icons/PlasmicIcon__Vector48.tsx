// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector48Icon(props: Vector48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 43"}
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
          "M21.269 0c11.74 0 21.269 9.528 21.269 21.269 0 11.74-9.529 21.269-21.27 21.269C9.529 42.538 0 33.009 0 21.268 0 9.529 9.528 0 21.269 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
