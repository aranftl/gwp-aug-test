// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group61Icon(props: Group61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 121"}
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
          "M.188 1.001V119.99M14.462 1.002V119.99M7.7 1.001V119.99M21.976 1.004v118.988M6.95 1.003v118.988M21.229 1.005v118.988M.94 1.006v118.988M15.214 1.002V119.99M8.454 1.004v118.988M22.728 1.005v118.988M1.691 1.003V119.99M15.969 1.005v118.988M9.206 1.004v118.988M23.483 1.007v118.988M2.44 1.001V119.99M16.72 1.006v118.988M9.954 1.003V119.99M24.23 1.002V119.99M3.191 1.001V119.99M17.47 1.003v118.988M10.709 1.005v118.988M24.979 1v118.988M3.944 1.001V119.99M18.218 1.002V119.99M11.458 1.003v118.988M25.735 1.006v118.988M4.698 1.005v118.988M18.97 1.002V119.99M12.213 1.006v118.988M26.487 1.006v118.988M5.447 1.002V119.99M19.724 1.005v118.988M12.96 1v118.99M27.236 1.004v118.988M6.196 1v118.99M20.474 1.003V119.99M13.71 1.002V119.99M27.991 1.006v118.989"
        }
        stroke={"currentColor"}
        strokeWidth={".369"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group61Icon;
/* prettier-ignore-end */
