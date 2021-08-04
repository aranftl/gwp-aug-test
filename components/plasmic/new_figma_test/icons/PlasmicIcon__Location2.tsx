// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Location2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Location2Icon(props: Location2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M7.495 11.837h-.048a1.076 1.076 0 01-1.001-.789L5.428 7.486 1.865 6.467a1.088 1.088 0 01-.09-2.063l8.587-3.256a1.087 1.087 0 011.403 1.403l-3.256 8.587a1.071 1.071 0 01-1.014.7zm3.249-9.685L2.16 5.41l3.85 1.122a.538.538 0 01.37.37l1.098 3.85L10.76 2.17l-.017-.017z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Location2Icon;
/* prettier-ignore-end */
