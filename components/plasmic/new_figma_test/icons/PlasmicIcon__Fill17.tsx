// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill17Icon(props: Fill17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
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
          "M0 0h1.13v4.415h.029l1.714-1.866h1.451l-1.96 2.004 2.083 2.43H2.949L1.159 4.71H1.13v2.272H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill17Icon;
/* prettier-ignore-end */
