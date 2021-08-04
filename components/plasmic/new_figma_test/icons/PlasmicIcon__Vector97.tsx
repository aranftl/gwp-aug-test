// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector97Icon(props: Vector97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M1.432 0H0v5h1.424c.757 0 1.304-.178 1.783-.58a2.508 2.508 0 00.908-1.918C4.115 1.028 3.02 0 1.432 0zm1.14 3.756c-.308.276-.706.398-1.336.398H.974V.846h.262c.63 0 1.013.114 1.335.406.346.32.541.773.54 1.244.001.477-.194.933-.54 1.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector97Icon;
/* prettier-ignore-end */
