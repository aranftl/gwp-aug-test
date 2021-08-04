// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector30Icon(props: Vector30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M11.421 22.843c6.308 0 11.422-5.114 11.422-11.422C22.843 5.114 17.729 0 11.42 0 5.114 0 0 5.114 0 11.421c0 6.308 5.114 11.422 11.421 11.422z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
