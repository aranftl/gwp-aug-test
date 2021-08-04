// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector62Icon(props: Vector62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.158.07C.158.025.128 0 .073 0H0v.225h.054v-.09l.063.087h.068L.11.129A.063.063 0 00.158.07zm-.1.03H.05V.042h.01C.086.042.1.05.1.07S.09.1.063.1H.059z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector62Icon;
/* prettier-ignore-end */
