// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle3Icon(props: Rectangle3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 450 297"}
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
          "M0 10.807C0 4.84 4.839 0 10.807 0h427.541c5.969 0 10.807 4.839 10.807 10.807v285.32H0V10.807z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle3Icon;
/* prettier-ignore-end */
