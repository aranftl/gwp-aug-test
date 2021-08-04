// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 22"}
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
          "M.102 1.003v20.564m7.76-20.564v20.565M4.185 1.002v20.564m7.761-20.563v20.565M3.779 1.003v20.564m7.758-20.564v20.565M.513 1.004V21.57M8.27 1.001v20.565M4.597 1.004V21.57m7.757-20.567v20.565M.92 1.003v20.565M8.679 1.004v20.564M5.004 1.003v20.565m7.759-20.565v20.565M1.329 1.003v20.565M9.088 1.003v20.565M5.413 1.005V21.57M13.17 1.002v20.564M1.738 1.005v20.564M9.496 1.003v20.565M5.82 1.002v20.565m7.76-20.563v20.564M2.147 1.005v20.564M9.905 1.004v20.564M6.229 1.004V21.57m7.759-20.568v20.564M2.553 1.002v20.565m7.76-20.563v20.564M6.64 1.007V21.57m7.756-20.568v20.565M2.963 1.004v20.564M10.718 1v20.565M7.045 1.002v20.565m7.759-20.564v20.564M3.37 1.003v20.564m7.761-20.561V21.57M7.452 1.001v20.565m7.761-20.563v20.564"
        }
        stroke={"currentColor"}
        strokeWidth={".2"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
