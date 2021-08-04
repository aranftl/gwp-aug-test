// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group84Icon(props: Group84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 46"}
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
          "M.222 1.003v44.72M17.1 1.006v44.72M9.104 1.003v44.72M25.981 1.006v44.72M8.217 1.003v44.72M25.09 1.004v44.72M1.115 1.006v44.72m16.87-44.723v44.72M9.995 1.005v44.72M26.869 1.006v44.72M2.002 1.004v44.72M18.875 1.006v44.72M10.883 1.005v44.72M27.756 1.004v44.72M2.888 1.003v44.72M19.764 1.005v44.72M11.772 1.006v44.72m16.873-44.72v44.72M3.78 1.007v44.72m16.873-44.72v44.72M12.657 1.003v44.72M29.532 1.006v44.72M4.668 1.006v44.72M21.54 1.007v44.72M13.546 1.005v44.72M30.42 1.005v44.72M5.553 1.004v44.72M22.43 1.007v44.72M14.437 1.009v44.72m16.87-44.725v44.72M6.446 1.01v44.719M23.311 1v44.72M15.322 1.003v44.72M32.197 1.006v44.72M7.33 1.004v44.72M24.205 1.007v44.72M16.208 1.002v44.72M33.084 1.004v44.72"
        }
        stroke={"currentColor"}
        strokeWidth={".435"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group84Icon;
/* prettier-ignore-end */
