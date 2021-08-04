// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask65Icon(props: Mask65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 11"}
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
          "M16.332.39L9.3 7.42 2.268.39A1.325 1.325 0 00.39.39a1.325 1.325 0 000 1.878l7.97 7.971a1.325 1.325 0 001.88 0l7.97-7.97c.52-.52.52-1.36 0-1.88a1.327 1.327 0 00-1.878 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask65Icon;
/* prettier-ignore-end */
