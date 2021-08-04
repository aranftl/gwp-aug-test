// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group98IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group98Icon(props: Group98IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 39"}
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
          "M.185 1v37.212M14.228 1.004v37.212M7.575 1v37.213M21.62 1.004v37.213M6.838 1.003v37.212M20.88 1.004v37.212M.927 1.003v37.212M14.966 1.001v37.212M8.318 1.004v37.212m14.04-37.211v37.212M1.667 1.004v37.212M15.704 1.003v37.212M9.054 1.002v37.212M23.096 1.003v37.212M2.404 1.002v37.212M16.445 1.003v37.212M9.796 1.005v37.212M23.835 1.004v37.212M3.145 1.005v37.212M17.187 1.006v37.212M10.53 1v37.213M24.575 1.004v37.212M3.885 1.006v37.212M17.924 1.004v37.212M11.272 1.005v37.212M25.315 1.004v37.212M4.62 1.001v37.212M18.665 1.004v37.212m-6.65-37.209V38.22M26.049 1v37.212M5.361 1.004v37.213M19.398 1v37.212M12.75 1.002v37.212M26.793 1.006v37.212M6.101 1.005v37.212M20.142 1.006v37.212M13.486 1v37.213M27.53 1.004v37.212"
        }
        stroke={"currentColor"}
        strokeWidth={".362"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group98Icon;
/* prettier-ignore-end */
