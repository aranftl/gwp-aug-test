// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorIcon(props: ColorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 1"}
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
          "M0 .357C0 .16.139 0 .31 0h4.958c.171 0 .31.16.31.357 0 .198-.139.358-.31.358H.31C.139.715 0 .555 0 .357z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ColorIcon;
/* prettier-ignore-end */
