// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Stroke16Copy4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Stroke16Copy4Icon(props: Stroke16Copy4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 1"}
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
          "M123.888 0c-.098 0 0 .098 0 .438 0-.098-.098 0 0 0H.441C.099.438 0 .34 0 .438 0 .098.099 0 .44 0h123.448z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke16Copy4Icon;
/* prettier-ignore-end */
