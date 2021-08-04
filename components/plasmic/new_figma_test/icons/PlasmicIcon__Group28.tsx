// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
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
          "M.104 1v65.63m7.89-65.628v65.63M4.258 1.003v65.63m7.888-65.631v65.63M3.843 1.004v65.63m7.889-65.631v65.63M.52 1.001v65.63M8.409 1.002v65.63M4.672 1.002v65.63m7.888-65.63v65.63M.936 1.001v65.63M8.824 1.002v65.63M5.09 1.002v65.63m7.886-65.63v65.63M1.35 1.002v65.63m7.89-65.63v65.63M5.504 1.005v65.63M13.39 1v65.63M1.764 1v65.63M9.656 1.002v65.63M5.917 1.002v65.63m7.891-65.63v65.63M2.18 1.001v65.63m7.89-65.628v65.63M6.332 1.001v65.63m7.889-65.629v65.63M2.595 1.001v65.63m7.89-65.628v65.63M6.749 1.002v65.63M14.64 1.004v65.63M3.012 1.002v65.63M10.9 1v65.631M7.165 1.004v65.63m7.888-65.631v65.63M3.427 1.002v65.63m7.889-65.63v65.63M7.578 1.003v65.63m7.892-65.63v65.63"
        }
        stroke={"currentColor"}
        strokeWidth={".204"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
