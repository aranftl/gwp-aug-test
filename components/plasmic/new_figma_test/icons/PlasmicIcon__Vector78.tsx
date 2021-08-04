// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector78Icon(props: Vector78IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M2.949 1.353C2.949.494 2.357 0 1.326 0H0v4.583h.885V2.741h.117l1.24 1.842h1.1l-1.444-1.93c.679-.135 1.05-.592 1.05-1.3zm-1.794.756H.893V.721h.276c.556 0 .859.234.859.68 0 .446-.303.712-.873.712v-.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector78Icon;
/* prettier-ignore-end */
