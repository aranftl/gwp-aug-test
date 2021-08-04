// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector126IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector126Icon(props: Vector126IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 560 392"}
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
          "M559.241 372.296c0 10.696-8.752 19.448-19.448 19.448H19.448C8.752 391.744 0 382.992 0 372.296V19.448C0 8.752 8.752 0 19.448 0h520.351c10.697 0 19.448 8.752 19.448 19.448v352.848h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector126Icon;
/* prettier-ignore-end */
