// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask74Icon(props: Mask74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 3"}
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
          "M4.375.27A.441.441 0 003.968 0H.44a.437.437 0 00-.312.748l1.764 1.753a.441.441 0 00.623 0L4.28.748A.436.436 0 004.375.27"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask74Icon;
/* prettier-ignore-end */
