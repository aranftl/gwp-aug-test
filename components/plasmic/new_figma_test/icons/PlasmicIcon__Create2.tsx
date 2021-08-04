// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Create2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Create2Icon(props: Create2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M6.698 3.891l-2.117-.002.003-2.118a.353.353 0 10-.706 0L3.875 3.89l-2.117-.003a.353.353 0 100 .705l2.117.003-.002 2.117a.353.353 0 00.705 0l.003-2.117 2.117.003a.353.353 0 000-.706z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Create2Icon;
/* prettier-ignore-end */
