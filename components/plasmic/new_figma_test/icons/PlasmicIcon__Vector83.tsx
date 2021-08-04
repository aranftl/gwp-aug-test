// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector83Icon(props: Vector83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 21"}
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
          "M33.244 19.736c0 .687-.55 1.236-1.236 1.236H1.236C.55 20.972 0 20.422 0 19.736v-18.5C0 .55.55 0 1.236 0h30.772c.686 0 1.236.55 1.236 1.236v18.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector83Icon;
/* prettier-ignore-end */
