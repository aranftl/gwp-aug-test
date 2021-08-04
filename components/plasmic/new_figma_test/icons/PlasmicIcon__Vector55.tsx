// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector55Icon(props: Vector55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.032 1.029C.734.917.642.844.642.705.642.543.8.42 1.016.42c.16.003.308.08.404.208l.262-.343A1.12 1.12 0 00.927 0c-.454 0-.8.316-.8.737 0 .353.16.535.63.704.12.037.237.087.347.147.094.055.15.156.15.266a.366.366 0 01-.368.363l-.02-.001a.595.595 0 01-.547-.344L0 2.19c.23.339.508.489.894.489.52 0 .886-.346.886-.844-.009-.412-.179-.597-.748-.805z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector55Icon;
/* prettier-ignore-end */
