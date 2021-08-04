// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group59Icon(props: Group59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 120"}
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
          "M.188 1v118.76M14.463 1v118.759M7.706 1.004v118.759M21.977 1.002V119.76M6.956 1.007v118.759M21.23 1.003v118.759M.939 1.001V119.76M15.217 1.004v118.759M8.454 1.002V119.76M22.732 1.004v118.76M1.694 1.003v118.759M15.97 1.003v118.759M9.207 1.002V119.76M23.484 1.004v118.76M2.443 1.001V119.76M16.718 1.001V119.76M9.955 1v118.759M24.233 1.002v118.759M3.195 1.002V119.76M17.47 1.001v118.76M10.71 1.003v118.76M24.985 1.003v118.759M3.947 1.002V119.76M18.224 1.005v118.759M11.459 1.001V119.76M25.734 1v118.76M4.695 1v118.76M18.976 1.005v118.759M12.213 1.004v118.759M26.487 1.004v118.76M5.453 1.005v118.76M19.725 1.003v118.759M12.965 1.004v118.759M27.24 1.004v118.76M6.201 1.004v118.759M20.474 1v118.76M13.717 1.004v118.759M27.989 1.002v118.759"
        }
        stroke={"currentColor"}
        strokeWidth={".369"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group59Icon;
/* prettier-ignore-end */
