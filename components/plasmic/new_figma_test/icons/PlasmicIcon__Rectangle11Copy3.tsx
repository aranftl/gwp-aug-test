// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11Copy3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Copy3Icon(props: Rectangle11Copy3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 9"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 1.459C0 .653.653 0 1.459 0H45.49v8.387H1.46A1.459 1.459 0 010 6.928v-5.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle11Copy3Icon;
/* prettier-ignore-end */
