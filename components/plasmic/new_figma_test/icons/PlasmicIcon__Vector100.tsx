// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector100IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector100Icon(props: Vector100IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 6"}
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
          "M0 2.618a2.588 2.588 0 002.57 2.608h.07c.424 0 .843-.098 1.222-.29v-1.15c-.386.387-.736.55-1.178.55-.982 0-1.68-.713-1.68-1.726A1.662 1.662 0 012.64.893c.466 0 .817.166 1.223.562V.307A2.517 2.517 0 002.662 0 2.629 2.629 0 000 2.597v.021z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector100Icon;
/* prettier-ignore-end */
