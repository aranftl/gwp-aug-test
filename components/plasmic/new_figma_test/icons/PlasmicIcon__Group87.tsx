// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group87IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group87Icon(props: Group87IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 145"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.226 1.001v142.994m17.16-142.99v142.994M9.258 1.003v142.994M26.413 1.005v142.994M8.356 1.005v142.994M25.511 1.003v142.995M1.13 1.004v142.994M18.288 1.003v142.995M10.161 1.003v142.994M27.318 1.006V144M2.032 1v142.994M19.191 1.003v142.995M11.066 1.004V144M28.224 1.008v142.995M2.94 1.006v142.995M20.094 1.004v142.994M11.967 1.004V144M29.12 1.002v142.994M3.845 1.008v142.994M21 1.006v142.995m-8.132-143v142.994M30.025 1.003v142.994M4.742 1.002v142.995M21.9 1.005v142.994M13.776 1.007V144M30.93 1.006v142.995M5.647 1.003v142.995M22.804 1.006v142.995M14.675 1.003v142.994M31.83 1.004v142.994M6.552 1.005v142.994M23.707 1.006v142.995m-8.13-143v142.994M32.735 1.005V144M7.453 1.004V144M24.607 1.002v142.994M16.483 1.007V144M33.641 1.008v142.994"
        }
        stroke={"currentColor"}
        strokeWidth={".443"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group87Icon;
/* prettier-ignore-end */
