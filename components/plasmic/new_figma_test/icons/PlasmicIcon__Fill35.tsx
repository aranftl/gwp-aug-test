// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill35Icon(props: Fill35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M2.908 4.456c1.058 0 1.549-.885 1.549-1.704 0-.82-.49-1.682-1.549-1.682-1.058 0-1.549.863-1.549 1.682 0 .82.49 1.704 1.55 1.704m0-4.456c1.615 0 2.907 1.103 2.907 2.752 0 1.65-1.292 2.796-2.908 2.796C1.293 5.548 0 4.402 0 2.752 0 1.103 1.293 0 2.908 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill35Icon;
/* prettier-ignore-end */
