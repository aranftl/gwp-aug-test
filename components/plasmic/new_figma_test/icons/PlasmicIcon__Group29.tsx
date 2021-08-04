// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group29Icon(props: Group29IconProps) {
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
          "M.104 1v65.63m7.89-65.628v65.63M4.26 1.004v65.63m7.886-65.632v65.63M3.844 1.005v65.63m7.888-65.632v65.63M.52 1.002v65.63m7.889-65.63v65.63M4.672 1.001v65.63m7.89-65.628v65.63M.935 1.001v65.63M8.824 1.002v65.63M5.088 1.003v65.63m7.891-65.629v65.63M1.35 1.001v65.63M9.238 1v65.63M5.5 1v65.63m7.891-65.629v65.63M1.767 1.002v65.63m7.887-65.63v65.63M5.917 1.002v65.63m7.891-65.629v65.63M2.182 1.002v65.63M10.07 1.003v65.63M6.332 1.001v65.63M14.22 1v65.63M2.596 1.003v65.63m7.89-65.631v65.63M6.749 1.002v65.63m7.888-65.629v65.63M3.013 1.003v65.63m7.889-65.629v65.63M7.164 1.002v65.63m7.89-65.628v65.63M3.426 1.002v65.63m7.89-65.63v65.63M7.58 1.002v65.63M15.467 1v65.63"
        }
        stroke={"currentColor"}
        strokeWidth={".204"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group29Icon;
/* prettier-ignore-end */
