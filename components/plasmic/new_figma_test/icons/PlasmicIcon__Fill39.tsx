// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill39Icon(props: Fill39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M2.862 1.07c-.98 0-1.57.885-1.57 1.704 0 .82.59 1.682 1.57 1.682C3.9 4.456 4.4 3.571 4.4 2.752S3.899 1.07 2.862 1.07zM1.282.153v.732h.032C1.582.47 2.184 0 3.164 0 4.69 0 5.76 1.201 5.76 2.752c0 1.53-1.003 2.796-2.63 2.796-.746 0-1.426-.327-1.77-.851h-.023v3.32H0V.153h1.281z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill39Icon;
/* prettier-ignore-end */
