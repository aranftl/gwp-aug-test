// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask43Icon(props: Mask43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M0 3.643A3.647 3.647 0 013.643 0a3.647 3.647 0 013.643 3.643 3.647 3.647 0 01-3.643 3.643A3.647 3.647 0 010 3.643zm.727.003a2.918 2.918 0 002.915 2.915 2.918 2.918 0 002.914-2.915A2.918 2.918 0 003.642.732 2.918 2.918 0 00.727 3.646zM3.643 4.74a.364.364 0 100 .728.364.364 0 000-.728m0-2.915c-.501 0-.937.341-1.06.829a.364.364 0 00.706.179.37.37 0 01.353-.28c.201 0 .365.164.365.365l.002.013-.002.014c0 .07-.039.132-.1.163l-.427.213a.364.364 0 00-.202.326v.364a.364.364 0 10.729 0v-.139l.225-.113a.917.917 0 00.503-.84c0-.603-.49-1.094-1.093-1.094"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask43Icon;
/* prettier-ignore-end */
