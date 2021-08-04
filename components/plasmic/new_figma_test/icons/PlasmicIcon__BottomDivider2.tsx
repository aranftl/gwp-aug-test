// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomDivider2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomDivider2Icon(props: BottomDivider2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 365 1"}
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
        d={"M0 0h363.959a.364.364 0 010 .729H.729A.729.729 0 010 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomDivider2Icon;
/* prettier-ignore-end */
