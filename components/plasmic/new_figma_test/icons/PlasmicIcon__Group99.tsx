// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group99Icon(props: Group99IconProps) {
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
          "M.188 1v118.76M14.465 1.003v118.759M7.705 1.004v118.76M21.977 1.002v118.759M6.953 1.004v118.76M21.231 1.006v118.76M.94 1v118.76M15.214 1.002V119.76M8.454 1.002v118.76M22.733 1.005v118.759M1.695 1.003v118.76M15.97 1.003v118.76M9.207 1.002v118.759M23.48 1.003v118.759M2.443 1.002V119.76M16.718 1.001v118.76M9.96 1.007v118.759M24.23 1v118.76M3.192 1v118.759M17.473 1.004v118.76M10.707 1.001v118.76M24.985 1.003v118.76M3.946 1.003v118.759M18.223 1.006v118.759M11.46 1.004v118.76M25.736 1.004v118.76M4.698 1.003v118.76M18.973 1.003v118.759M12.213 1.004v118.76M26.49 1.007v118.759M5.45 1.003v118.759M19.725 1.003v118.759M12.965 1.005v118.759M27.24 1.005v118.759M6.202 1.004v118.759M20.474 1.001V119.76M13.713 1.003v118.76M27.992 1.005v118.759"
        }
        stroke={"currentColor"}
        strokeWidth={".369"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group99Icon;
/* prettier-ignore-end */
