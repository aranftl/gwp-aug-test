// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group19Icon(props: Group19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 14"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 4.512C2 3.172 3.172 2 4.512 2h3.517v9.378H4.512C3.172 11.378 2 10.206 2 8.866V4.512zM30.218 2h3.517c1.34 0 2.512 1.173 2.512 2.513v4.354c0 1.34-1.172 2.512-2.512 2.512h-3.517V2z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.368"}
      ></path>
    </svg>
  );
}

export default Group19Icon;
/* prettier-ignore-end */
