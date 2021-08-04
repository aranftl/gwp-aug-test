// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path16Icon(props: Path16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M6.743 5.458l3.904-3.905A.909.909 0 109.361.267L5.457 4.17 1.553.267A.908.908 0 10.267 1.553L4.17 5.458.267 9.362a.909.909 0 101.286 1.286l3.904-3.904 3.904 3.904a.907.907 0 001.286 0 .909.909 0 000-1.286L6.743 5.458z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path16Icon;
/* prettier-ignore-end */
