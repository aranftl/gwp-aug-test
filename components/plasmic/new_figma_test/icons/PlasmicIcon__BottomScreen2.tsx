// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomScreen2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomScreen2Icon(props: BottomScreen2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 11"}
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
        d={
          "M253.707 0v2.706c0 4.125-3.375 7.5-7.5 7.5H7.501C3.375 10.207 0 6.832 0 2.707V0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomScreen2Icon;
/* prettier-ignore-end */
