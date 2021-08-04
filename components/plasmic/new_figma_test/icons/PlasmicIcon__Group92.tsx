// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group92IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group92Icon(props: Group92IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 53"}
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
          "M.254 1v51.095M19.532 1v51.095m-9.13-51.092v51.094m19.28-51.093v51.094M9.39 1.006V52.1M28.666 1.002v51.094M1.27 1v51.095M20.55 1.003v51.095M11.42 1.005v51.094M30.695 1.003v51.094M2.286 1.003v51.094M21.563 1.002v51.094M12.432 1.004v51.094M31.709 1.003v51.094M3.301 1.004v51.094M22.576 1.003v51.094m-9.13-51.094v51.095M32.723 1.002v51.094M4.315 1.004v51.094M23.593 1.003v51.094M14.461 1.002v51.094M33.74 1.004V52.1M5.33 1.003v51.094M24.604 1v51.094M15.476 1.001v51.095M34.754 1.002v51.094M6.347 1.005V52.1M25.623 1.005v51.094M16.49 1.003v51.094M35.768 1.001v51.095M7.358 1.002v51.095M26.637 1.002v51.095M17.505 1.002v51.094M36.782 1.003v51.095M8.373 1.001v51.095M27.65 1.001v51.095M18.521 1.005v51.094M37.799 1.003v51.094"
        }
        stroke={"currentColor"}
        strokeWidth={".435"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group92Icon;
/* prettier-ignore-end */
