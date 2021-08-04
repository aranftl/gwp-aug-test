// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11Copy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Copy2Icon(props: Rectangle11Copy2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 5"}
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
          "M0 .806C0 .361.36 0 .806 0H25.14v4.635H.806A.806.806 0 010 3.829V.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle11Copy2Icon;
/* prettier-ignore-end */
