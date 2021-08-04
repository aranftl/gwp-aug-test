// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask24Icon(props: Mask24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
        d={"M4.746 9.493a4.746 4.746 0 100-9.493 4.746 4.746 0 000 9.493z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask24Icon;
/* prettier-ignore-end */
