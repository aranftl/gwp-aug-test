// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill20Icon(props: Fill20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M1.347.503c-.461 0-.74.417-.74.802 0 .386.279.792.74.792.488 0 .724-.416.724-.802 0-.385-.236-.792-.724-.792zM.603.072v.344h.016C.744.221 1.028 0 1.489 0c.718 0 1.222.565 1.222 1.295 0 .72-.472 1.316-1.238 1.316-.351 0-.67-.154-.833-.4H.63v1.562H0V.072h.603z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill20Icon;
/* prettier-ignore-end */
