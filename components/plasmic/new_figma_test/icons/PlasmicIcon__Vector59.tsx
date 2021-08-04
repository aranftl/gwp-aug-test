// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector59Icon(props: Vector59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.653.759C1.653.277 1.321 0 .743 0H0v2.57h.496V1.536h.066l.695 1.032h.616l-.809-1.082c.38-.075.589-.331.589-.728zm-1.006.423H.5V.404h.155c.312 0 .482.131.482.381s-.17.4-.49.4v-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector59Icon;
/* prettier-ignore-end */
