// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group51Icon(props: Group51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 462 323"}
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
        opacity={".3"}
        d={
          "M447.14.261c7.752 0 14.095 6.343 14.095 14.095v293.606c0 7.752-6.343 14.094-14.095 14.094H14.356c-7.752 0-14.095-6.342-14.095-14.094V14.356C.261 6.604 6.604.26 14.356.26H447.14zm0-.261H14.356C6.442 0 0 6.442 0 14.356v293.606c0 7.914 6.442 14.355 14.356 14.355h432.789c7.914 0 14.356-6.441 14.356-14.355V14.356C461.496 6.442 455.054 0 447.14 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group51Icon;
/* prettier-ignore-end */
