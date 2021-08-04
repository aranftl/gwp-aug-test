// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask34Icon(props: Mask34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 44"}
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
          "M35.44 7.732L24.06 1.13a8.31 8.31 0 00-8.363 0L4.318 7.732C1.65 9.28 0 12.183 0 15.33v12.885c0 3.146 1.65 6.048 4.318 7.597l11.38 6.603a8.308 8.308 0 008.363 0l11.38-6.603c2.667-1.549 4.317-4.451 4.317-7.597V15.33c0-3.147-1.65-6.05-4.318-7.598z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask34Icon;
/* prettier-ignore-end */
