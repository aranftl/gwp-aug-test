// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group31Icon(props: Group31IconProps) {
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
          "M.104 1v65.757M7.992 1.002v65.756M4.255 1.001v65.756m7.889-65.755v65.756M3.842 1.002V66.76m7.89-65.756V66.76M.52 1.004v65.757M8.409 1.002V66.76M4.672 1.002V66.76m7.889-65.756v65.757M.934 1v65.757m7.89-65.755V66.76M5.087 1.002V66.76m7.89-65.757V66.76M1.35 1.002V66.76M9.241 1.005v65.757M5.502 1.002V66.76m7.889-65.758v65.756M1.765 1.002v65.756M9.654 1.002v65.757M5.92 1.005V66.76m7.886-65.758V66.76M2.18 1.001v65.757m7.89-65.754V66.76M6.332 1.002v65.756m7.89-65.755V66.76M2.597 1.003v65.756M10.483 1v65.757M6.75 1.004v65.757m7.889-65.756V66.76M3.012 1.003v65.756m7.89-65.755v65.757m-3.74-65.76v65.757m7.89-65.755V66.76M3.425 1.001v65.757m7.891-65.756V66.76M7.577 1.001v65.757M15.47 1.006v65.756"
        }
        stroke={"currentColor"}
        strokeWidth={".204"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group31Icon;
/* prettier-ignore-end */
