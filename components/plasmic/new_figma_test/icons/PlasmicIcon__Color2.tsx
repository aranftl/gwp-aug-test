// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Color2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Color2Icon(props: Color2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 2"}
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
          "M0 .642C0 .287.25 0 .557 0h8.91c.307 0 .556.287.556.642 0 .355-.249.642-.557.642H.556C.25 1.284 0 .997 0 .642z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Color2Icon;
/* prettier-ignore-end */
