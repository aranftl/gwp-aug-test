// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Color3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Color3Icon(props: Color3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 2"}
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
          "M0 .76C0 .34.295 0 .659 0h10.536c.364 0 .659.34.659.76 0 .419-.295.759-.659.759H.66c-.364 0-.659-.34-.659-.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Color3Icon;
/* prettier-ignore-end */
