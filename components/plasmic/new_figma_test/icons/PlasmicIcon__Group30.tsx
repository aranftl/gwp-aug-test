// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group30Icon(props: Group30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 67"}
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
          "M.104 1v65.757M7.996 1.004V66.76M4.26 1.003V66.76m7.888-65.756v65.757M3.843 1.002V66.76m7.889-65.758V66.76M.52 1.003v65.756M8.413 1.005V66.76M4.674 1.003V66.76m7.889-65.756V66.76M.936 1.002v65.757m7.89-65.758v65.757M5.088 1.002v65.756M12.98 1.005V66.76M1.353 1.005V66.76M9.242 1.003V66.76M5.504 1.003V66.76m7.888-65.758v65.756M1.769 1.004v65.757M9.658 1.004v65.757M5.918 1.002v65.756m7.889-65.756v65.756M2.182 1.003V66.76m7.889-65.757V66.76M6.336 1.004V66.76m7.887-65.757V66.76M2.598 1.002V66.76m7.89-65.756v65.757M6.75 1.004v65.757m7.89-65.757v65.757M3.014 1.004V66.76m7.889-65.756v65.757M7.165 1.002v65.756m7.891-65.752v65.756M3.429 1.004v65.757m7.887-65.758V66.76M7.582 1.006v65.756m7.889-65.757v65.757"
        }
        stroke={"currentColor"}
        strokeWidth={".204"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */
