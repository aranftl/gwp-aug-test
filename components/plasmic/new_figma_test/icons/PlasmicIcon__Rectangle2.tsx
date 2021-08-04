// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2Icon(props: Rectangle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 1"}
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
          "M0 .403C0 .18.18 0 .403 0H27.18c.223 0 .403.18.403.403v.402H0V.403z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle2Icon;
/* prettier-ignore-end */
