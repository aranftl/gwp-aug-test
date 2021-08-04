// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Chevron3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Chevron3Icon(props: Chevron3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
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
        d={"M5.604 0l5.604 6.339H0L5.604 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Chevron3Icon;
/* prettier-ignore-end */
