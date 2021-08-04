// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group86Icon(props: Group86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 144"}
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
          "M.226 1v142.72M17.382 1.003v142.72M9.26 1.006v142.72M26.412 1.004v142.719M8.358 1.008v142.72M25.51 1.004v142.719M1.128 1.004v142.719M18.285 1.003v142.72M10.16 1.002v142.72M27.316 1.005v142.719M2.036 1.005v142.719M19.19 1.004v142.72M11.064 1.004v142.719M28.223 1.008v142.719M2.936 1.003v142.719M20.092 1.003v142.72M11.963 1v142.719M29.122 1.003v142.72M3.84 1.004v142.72M20.995 1.003v142.72M12.87 1.005v142.719M30.025 1.004v142.719M4.742 1.003v142.72M21.9 1.007v142.719M13.77 1.002v142.72M30.926 1.003v142.72M5.645 1.003v142.72M22.803 1.007v142.72M14.675 1.004v142.719M31.832 1.006v142.719M6.553 1.007v142.72M23.704 1.004v142.72M15.58 1.004v142.72M32.733 1.005v142.719M7.451 1.004v142.719M24.606 1.003v142.719M16.483 1.004v142.72M33.634 1.002v142.72"
        }
        stroke={"currentColor"}
        strokeWidth={".443"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group86Icon;
/* prettier-ignore-end */
