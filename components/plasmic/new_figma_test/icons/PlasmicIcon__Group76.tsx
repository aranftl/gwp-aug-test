// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group76Icon(props: Group76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 32"}
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
          "M16.905 30.024H2V2h17.566c.63 0 1.26.234 1.654.7l3.702 3.66c.473.388.709 1.011.709 1.634v5.583"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.93 3.982v3.573h3.616c.813 0 1.175-.983.632-1.519l-2.712-2.68c-.542-.536-1.536-.178-1.536.626z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.302 16.012h10.634M8.3 9.008h4.608"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group76Icon;
/* prettier-ignore-end */
