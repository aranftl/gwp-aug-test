// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill15Icon(props: Fill15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M2.46 3.768c.894 0 1.308-.748 1.308-1.44 0-.693-.414-1.423-1.309-1.423s-1.31.73-1.31 1.422c0 .693.415 1.441 1.31 1.441M2.46 0c1.366 0 2.459.933 2.459 2.327 0 1.395-1.093 2.365-2.459 2.365S0 3.722 0 2.327C0 .933 1.093 0 2.46 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill15Icon;
/* prettier-ignore-end */
