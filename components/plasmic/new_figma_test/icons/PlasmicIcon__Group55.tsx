// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group55Icon(props: Group55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 89 32"}
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
          "M1 30.9l15.157-3.876 14.348-6.556 14.659-5.47 14.347 2.293L73.984 1 88.58 17.186"
        }
        stroke={"currentColor"}
        strokeWidth={".729"}
      ></path>
    </svg>
  );
}

export default Group55Icon;
/* prettier-ignore-end */
