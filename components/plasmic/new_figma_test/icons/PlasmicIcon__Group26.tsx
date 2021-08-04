// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 25"}
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
          "M.117 1v23.496M8.984 1.002v23.496M4.783 1.002v23.496m8.866-23.496v23.496M4.318 1.003V24.5M13.181 1v23.496M.584 1.002v23.495M9.45 1.001v23.496M5.252 1.004v23.495m8.862-23.498v23.496M1.052 1.003V24.5M9.915 1v23.496M5.717 1.002v23.496m8.865-23.496v23.496M1.517 1.002v23.496M10.38 1.001v23.496M6.182 1.002v23.496M15.05 1.003v23.495M1.984 1.002v23.496M10.85 1.002v23.496M6.65 1.002v23.496m8.865-23.495V24.5M2.45 1v23.497M11.313 1v23.496M7.117 1.001v23.496m8.865-23.496v23.496M2.918 1.002v23.496m8.866-23.494V24.5M7.583 1.003v23.495m8.864-23.497v23.496M3.383 1.002v23.496M12.25 1.002v23.496M8.05 1v23.497m8.865-23.495v23.496M3.849 1v23.497M12.714 1v23.497M8.517 1.002v23.496m8.865-23.496v23.496"
        }
        stroke={"currentColor"}
        strokeWidth={".2"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
