// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group88Icon(props: Group88IconProps) {
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
          "M.226 1.003v142.994M17.378 1.001v142.995M9.25 1v142.995M26.407 1.003v142.994M8.353 1.005v142.994M25.508 1.004v142.994M1.128 1.006v142.995M18.283 1.002v142.995M10.158 1.004v142.994M27.313 1.005v142.994M2.03 1v142.995M19.188 1.004v142.994M11.063 1.005v142.994M28.218 1.006v142.995M2.931 1.002v142.994M20.093 1.008v142.994M11.96 1v142.995M29.117 1.002v142.994M3.836 1.003v142.994M20.994 1.004v142.994M12.867 1.004V144M30.019 1.001v142.994M4.74 1.003v142.994M21.893 1.003v142.994M13.767 1.002v142.994M30.924 1.004V144M5.643 1.005v142.994M22.796 1.003v142.994M14.673 1.005v142.994M31.829 1.006V144M6.546 1.003v142.994M23.701 1.004v142.994M15.574 1.002v142.994M32.73 1.005v142.994M7.445 1.001v142.995M24.605 1.004v142.994M16.474 1v142.994M33.637 1.007v142.995"
        }
        stroke={"currentColor"}
        strokeWidth={".443"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group88Icon;
/* prettier-ignore-end */
