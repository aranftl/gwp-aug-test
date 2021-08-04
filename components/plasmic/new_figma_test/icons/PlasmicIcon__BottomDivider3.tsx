// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomDivider3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomDivider3Icon(props: BottomDivider3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 438 1"}
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
        d={"M0 0h437.389a.438.438 0 110 .876H.876A.876.876 0 010 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomDivider3Icon;
/* prettier-ignore-end */
