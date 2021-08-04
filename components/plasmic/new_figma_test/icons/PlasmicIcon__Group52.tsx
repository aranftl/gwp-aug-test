// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group52Icon(props: Group52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 460 320"}
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
        opacity={".3"}
        d={
          "M445.517.261c7.339 0 13.311 5.972 13.311 13.312v292.561c0 7.34-5.972 13.312-13.311 13.312H13.573c-7.34 0-13.312-5.972-13.312-13.312V13.573C.261 6.233 6.233.26 13.573.26h431.944zm0-.261H13.573C6.108 0 0 6.108 0 13.573v292.561c0 7.466 6.108 13.573 13.573 13.573h431.949c7.465 0 13.573-6.107 13.573-13.573V13.573C459.089 6.108 452.982 0 445.517 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group52Icon;
/* prettier-ignore-end */
