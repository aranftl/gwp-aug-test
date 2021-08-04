// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22Icon(props: Group22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 177"}
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
          "M246.207.144c4.056 0 7.356 3.3 7.356 7.357V169.18c0 4.056-3.3 7.356-7.356 7.356H7.501c-4.056 0-7.357-3.3-7.357-7.356V7.5c0-4.055 3.3-7.356 7.357-7.356h238.706zm0-.144H7.501C3.375 0 0 3.375 0 7.5v161.68c0 4.125 3.375 7.5 7.5 7.5h238.71c4.126 0 7.501-3.375 7.501-7.5V7.5c-.003-4.125-3.378-7.5-7.503-7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
