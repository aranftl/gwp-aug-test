// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector99Icon(props: Vector99IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 6"}
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
          "M2.007 2.002c-.58-.217-.757-.36-.757-.63 0-.315.307-.555.726-.555.311.006.601.157.787.406l.51-.668A2.178 2.178 0 001.804 0C.92 0 .245.614.245 1.434c0 .687.313 1.04 1.23 1.37.233.073.459.17.673.285a.599.599 0 01.294.518.712.712 0 01-.719.707c-.013 0-.025 0-.038-.002A1.157 1.157 0 01.62 3.644L0 4.26c.448.659.99.95 1.739.95 1.012 0 1.725-.672 1.725-1.642-.017-.801-.348-1.16-1.457-1.566z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector99Icon;
/* prettier-ignore-end */
