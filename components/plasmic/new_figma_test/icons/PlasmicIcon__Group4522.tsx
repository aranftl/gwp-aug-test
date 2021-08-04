// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4522IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4522Icon(props: Group4522IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.74 11c0 5.534-4.43 10-9.87 10C5.43 21 1 16.534 1 11S5.43 1 10.87 1c5.44 0 9.87 4.466 9.87 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={"M15.811 11l-8.153 5.196V5.804L15.811 11z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4522Icon;
/* prettier-ignore-end */
