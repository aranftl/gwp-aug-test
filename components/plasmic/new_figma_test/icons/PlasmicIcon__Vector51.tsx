// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector51Icon(props: Vector51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
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
          "M21.6 0c11.923 0 21.6 9.677 21.6 21.6 0 11.923-9.677 21.6-21.6 21.6C9.677 43.2 0 33.523 0 21.6 0 9.677 9.677 0 21.6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */
