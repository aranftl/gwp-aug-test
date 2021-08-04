// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Create4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Create4Icon(props: Create4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
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
          "M25.488 14.806l-8.056-.01.01-8.056a1.343 1.343 0 10-2.686 0l-.01 8.056-8.056-.01a1.343 1.343 0 000 2.685l8.056.01-.01 8.056a1.343 1.343 0 102.685 0l.01-8.056 8.057.01a1.343 1.343 0 000-2.685z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Create4Icon;
/* prettier-ignore-end */
