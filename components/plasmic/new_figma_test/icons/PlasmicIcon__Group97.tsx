// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group97Icon(props: Group97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 44"}
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
          "M.211 1v42.517M16.252 1.001v42.517M8.657 1.004v42.517M24.698 1.005V43.52M7.813 1.006v42.516m16.04-42.519v42.516M1.057 1.003v42.516M17.1 1.005v42.517M9.5 1.004V43.52M25.542 1.004v42.517M1.903 1.005V43.52M17.942 1.002V43.52M10.347 1.005v42.517M26.386 1.003V43.52M2.746 1.004v42.517M18.787 1.005V43.52m-7.6-42.517V43.52M27.23 1.003v42.516M3.59 1.004v42.517M19.632 1.003V43.52m-7.6-42.518v42.516M28.075 1.006v42.517M4.437 1.004V43.52M20.473 1v42.517M12.878 1.003V43.52M28.918 1v42.517M5.28 1.004v42.517M21.32 1.005v42.517m-7.6-42.518V43.52M29.763 1.003V43.52M6.123 1.004v42.517M22.165 1.004V43.52m-7.6-42.518v42.517M30.606 1.003v42.516M6.965 1v42.517M23.009 1.004V43.52M15.41 1.004v42.517M31.453 1.004V43.52"
        }
        stroke={"currentColor"}
        strokeWidth={".362"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group97Icon;
/* prettier-ignore-end */
