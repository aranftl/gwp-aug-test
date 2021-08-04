// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill23Icon(props: Fill23IconProps) {
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
          "M2.42.905c-.829 0-1.328.748-1.328 1.441 0 .693.5 1.422 1.328 1.422.877 0 1.3-.748 1.3-1.44 0-.693-.423-1.423-1.3-1.423zM1.083.129v.619h.029C1.338.398 1.846 0 2.676 0 3.966 0 4.87 1.016 4.87 2.327c0 1.293-.848 2.365-2.224 2.365-.631 0-1.206-.277-1.498-.72H1.13v2.807H0V.13h1.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill23Icon;
/* prettier-ignore-end */
