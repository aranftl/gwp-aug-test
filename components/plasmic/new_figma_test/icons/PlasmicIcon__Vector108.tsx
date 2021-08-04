// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector108IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector108Icon(props: Vector108IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 23"}
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
          "M36.266 21.53c0 .75-.6 1.349-1.349 1.349H1.35c-.75 0-1.349-.6-1.349-1.35V1.35A1.342 1.342 0 011.349 0h33.568c.75 0 1.35.6 1.35 1.349v20.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector108Icon;
/* prettier-ignore-end */
