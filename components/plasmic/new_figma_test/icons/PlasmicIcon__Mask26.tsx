// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask26Icon(props: Mask26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
        d={"M8.466 16.933A8.466 8.466 0 108.466 0a8.466 8.466 0 000 16.933z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask26Icon;
/* prettier-ignore-end */
