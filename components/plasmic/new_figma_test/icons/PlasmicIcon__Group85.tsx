// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group85Icon(props: Group85IconProps) {
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
          "M.226 1.003v142.72M17.382 1.006v142.719M9.257 1.005v142.719M26.41 1.005v142.719M8.355 1.008v142.72M25.512 1.008v142.72M1.13 1.004v142.72M18.284 1.004v142.72M10.157 1.002V143.72M27.316 1.008v142.719M2.034 1.004v142.72M19.19 1.005v142.72M11.06 1.002V143.72M28.215 1.003v142.72M2.934 1.004v142.719M20.092 1.006v142.719M11.968 1.009v142.719M29.117 1.002v142.72M3.833 1v142.72M20.997 1.007v142.719M12.867 1.004v142.72M30.023 1.005v142.719M4.74 1.004v142.719M21.899 1.008v142.72M13.769 1.003v142.72M30.924 1.004v142.72M5.644 1.004v142.72M22.8 1.005v142.72M14.675 1.006v142.72M31.832 1.008v142.72M6.546 1.003v142.719M23.703 1.005v142.719M15.578 1.006v142.72M32.734 1.007v142.719M7.45 1.004v142.72M24.603 1.002v142.72M16.478 1.004v142.72M33.636 1.005v142.72"
        }
        stroke={"currentColor"}
        strokeWidth={".443"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group85Icon;
/* prettier-ignore-end */
