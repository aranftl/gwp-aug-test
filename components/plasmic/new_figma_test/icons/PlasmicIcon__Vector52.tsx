// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector52Icon(props: Vector52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 5"}
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
        d={"M13.954 0S8.824 3.374 0 4.895h13.393a.56.56 0 00.56-.562V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector52Icon;
/* prettier-ignore-end */
