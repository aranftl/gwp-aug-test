// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector106Icon(props: Vector106IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.307.135C.307.048.247 0 .141 0H0v.439h.104V.26l.124.17H.36L.215.251A.122.122 0 00.307.135zm-.193.06H.097V.081h.019c.052 0 .08.018.08.056 0 .039-.02.058-.074.058H.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector106Icon;
/* prettier-ignore-end */
