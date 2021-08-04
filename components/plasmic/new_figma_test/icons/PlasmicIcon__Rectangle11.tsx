// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Icon(props: Rectangle11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 5"}
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
          "M0 .806C0 .361.36 0 .806 0h15.819v4.635H.806A.806.806 0 010 3.829V.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle11Icon;
/* prettier-ignore-end */
