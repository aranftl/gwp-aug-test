// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector40Icon(props: Vector40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 255 178"}
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
          "M254.749 170.048c0 4.284-3.505 7.789-7.789 7.789H7.79c-4.285 0-7.79-3.505-7.79-7.789V7.789C0 3.505 3.505 0 7.79 0h239.172c4.284 0 7.79 3.505 7.79 7.79v162.258h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector40Icon;
/* prettier-ignore-end */
