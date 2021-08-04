// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Create3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Create3Icon(props: Create3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M11.948 6.94l-3.776-.004.004-3.776a.63.63 0 00-1.259 0l-.004 3.776-3.777-.005a.63.63 0 100 1.26l3.777.004-.005 3.777a.63.63 0 101.259 0l.005-3.777 3.776.005a.63.63 0 100-1.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Create3Icon;
/* prettier-ignore-end */
