// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector103Icon(props: Vector103IconProps) {
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
          "M3.217 1.476C3.217.539 2.57 0 1.447 0H0v5h.966V2.99h.127L2.446 5h1.2L2.07 2.894c.74-.147 1.146-.645 1.146-1.418zm-1.957.825H.974V.786h.301c.607 0 .937.255.937.742s-.33.777-.952.777V2.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector103Icon;
/* prettier-ignore-end */
