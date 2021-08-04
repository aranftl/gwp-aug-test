// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Thumb2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Thumb2Icon(props: Thumb2IconProps) {
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
          "M3.279 6.615c1.81 0 3.279-1.48 3.279-3.307S5.09 0 3.278 0C1.469 0 0 1.48 0 3.308c0 1.826 1.468 3.307 3.279 3.307z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Thumb2Icon;
/* prettier-ignore-end */
