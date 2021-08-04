// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector89Icon(props: Vector89IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 460 320"}
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
          "M459.089 306.14c0 7.465-6.107 13.572-13.572 13.572H13.573C6.108 319.712 0 313.605 0 306.14V13.573C0 6.108 6.108 0 13.573 0h431.949c7.465 0 13.573 6.108 13.573 13.573V306.14h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector89Icon;
/* prettier-ignore-end */
