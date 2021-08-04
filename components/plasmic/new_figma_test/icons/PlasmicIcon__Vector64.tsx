// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector64Icon(props: Vector64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 12"}
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
          "M18.637 11.064a.69.69 0 01-.693.693H.694A.69.69 0 010 11.064V.694A.69.69 0 01.693 0h17.25a.69.69 0 01.694.693v10.371z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector64Icon;
/* prettier-ignore-end */
