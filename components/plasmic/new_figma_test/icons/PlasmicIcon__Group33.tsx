// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group33Icon(props: Group33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 9"}
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
          "M0 0v8.467h5.19v-1.25H1.264V1.25h13.139v5.969H6.874L5.612 8.467h10.053V0H0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.652 5.645V2.51h2.113v.643h-1.38v.588h1.304v.607h-1.305V5h1.46v.646h-2.192zm-7.519 0V2.51h.725v2.476h1.155v.66h-1.88zm2.507 0h.626V2.51h-.627v3.136zm3.183 0h-.752L6.89 2.51h.846l.721 2.224h.018l.717-2.224h.832L8.823 5.645z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group33Icon;
/* prettier-ignore-end */
