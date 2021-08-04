// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group60Icon(props: Group60IconProps) {
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
          "M.188 1v118.988M14.467 1.005v118.988M7.705 1.004v118.988M21.979 1.005v118.988M6.95 1.001V119.99M21.226 1v118.988M.938 1v118.99M15.217 1.002V119.99M8.454 1.002V119.99M22.728 1.002V119.99M1.691 1v118.988M15.969 1.003V119.99M9.206 1.002V119.99M23.486 1.007v118.988M2.444 1.004v118.989M16.72 1.003v118.988M9.957 1.003v118.988M24.23 1v118.988M3.199 1.007v118.988M17.475 1.006v118.988M10.706 1v118.988M24.984 1.003V119.99M3.946 1.002V119.99M18.223 1.005v118.988M11.463 1.006v118.988M25.735 1.004v118.988M4.698 1.002V119.99M18.975 1.005v118.988M12.212 1.004v118.988M26.487 1.004v118.988M5.45 1.002V119.99M19.725 1.002V119.99M12.962 1v118.99M27.239 1.004v118.988M6.2 1.003v118.989M20.473 1v118.99M13.715 1.005v118.988M27.993 1.007v118.988"
        }
        stroke={"currentColor"}
        strokeWidth={".369"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group60Icon;
/* prettier-ignore-end */
