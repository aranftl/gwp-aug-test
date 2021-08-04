// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 256 179"}
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
          "M247.104.144c4.284 0 7.789 3.505 7.789 7.79v162.255c0 4.284-3.505 7.79-7.789 7.79H7.934c-4.285 0-7.79-3.506-7.79-7.79V7.933C.144 3.65 3.65.144 7.934.144h239.17zm0-.144H7.934C3.56 0 0 3.56 0 7.933V170.19c0 4.374 3.56 7.934 7.933 7.934h239.174c4.373 0 7.933-3.56 7.933-7.934V7.933C255.037 3.56 251.477 0 247.104 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
