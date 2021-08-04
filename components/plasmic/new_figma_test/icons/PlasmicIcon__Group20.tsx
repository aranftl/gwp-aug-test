// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group20Icon(props: Group20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 258 181"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M248.226.144c4.852 0 8.799 3.947 8.799 8.8v162.255c0 4.852-3.947 8.799-8.799 8.799H8.943c-4.852 0-8.799-3.947-8.799-8.799V8.943c0-4.852 3.947-8.799 8.8-8.799h239.282zm0-.144H8.943C4.024 0 0 4.024 0 8.943V171.2c0 4.919 4.024 8.943 8.943 8.943H248.23c4.919 0 8.943-4.024 8.943-8.943V8.943C257.169 4.024 253.145 0 248.226 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
