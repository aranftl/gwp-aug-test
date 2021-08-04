// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1955IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1955Icon(props: Group1955IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 27"}
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
        d={"M1 15.352C1 9.626 5.877 5.01 11.926 5.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.81 2l4.115 2.883-3.044 3.895"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.358 6.411c5.247 2.864 7.038 9.175 4.013 14.142"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M25.84 18.527l-4.822 1.967-2.08-4.486"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.295 24.468c-5.247 2.805-11.913.994-14.876-3.974"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M1.925 25.071l.624-4.577 4.835.591"}
        stroke={"currentColor"}
        strokeWidth={"2.968"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1955Icon;
/* prettier-ignore-end */
