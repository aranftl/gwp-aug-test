// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector114IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector114Icon(props: Vector114IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
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
          "M11.773 23.53a11.72 11.72 0 006.524-1.995l6.814 6.79c.868.9 2.314.9 3.214 0 .9-.87.9-2.317 0-3.218l-6.813-6.79c3.6-5.372 2.185-12.676-3.215-16.312C12.898-1.631 5.635-.183 2.003 5.223-1.63 10.628-.183 17.9 5.217 21.535a11.726 11.726 0 006.556 1.995zm0-20.785c4.982 0 9.031 4.054 9.031 9.041s-4.05 9.042-9.03 9.042c-4.982 0-9-4.055-9-9.042s4.018-9.04 9-9.04z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector114Icon;
/* prettier-ignore-end */
