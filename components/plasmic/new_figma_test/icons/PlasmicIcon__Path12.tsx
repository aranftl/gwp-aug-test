// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path12Icon(props: Path12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M3.753 3.037L5.926.864A.506.506 0 105.21.148L3.037 2.321.864.148a.506.506 0 10-.716.716l2.173 2.173L.148 5.21a.506.506 0 10.716.716l2.173-2.173L5.21 5.926a.505.505 0 00.716 0 .506.506 0 000-.716L3.753 3.037z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path12Icon;
/* prettier-ignore-end */
