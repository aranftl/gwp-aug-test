// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle5Icon(props: Rectangle5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 540 356"}
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
          "M0 12.988C0 5.815 5.815 0 12.988 0h513.799c7.172 0 12.987 5.815 12.987 12.988v342.884H0V12.988z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle5Icon;
/* prettier-ignore-end */
