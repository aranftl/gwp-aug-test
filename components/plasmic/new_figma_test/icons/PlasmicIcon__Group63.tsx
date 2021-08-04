// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group63Icon(props: Group63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 16"}
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
          "M0 0v15.214h9.327V12.97H2.269V2.245h23.61v10.724H12.352l-2.269 2.245h18.064V0H0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.14 10.143V4.508h3.797v1.155h-2.48V6.72H22.8v1.09h-2.345v1.17h2.624v1.162h-3.94zm-13.51 0V4.508h1.303v4.45h2.075v1.185H5.63zm4.503 0h1.126V4.508h-1.126v5.635zm5.722 0h-1.353l-2.118-5.635h1.518l1.296 3.996h.032l1.289-3.996h1.494l-2.158 5.635z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group63Icon;
/* prettier-ignore-end */
