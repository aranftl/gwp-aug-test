// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group74Icon(props: Group74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 2"}
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

      <path d={"M3.5 2H0l.4-2h3.5l-.4 2z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Group74Icon;
/* prettier-ignore-end */
