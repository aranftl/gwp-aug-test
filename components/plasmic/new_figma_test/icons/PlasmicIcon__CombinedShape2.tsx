// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShape2Icon(props: CombinedShape2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M2.186 0A2.19 2.19 0 000 2.186V20.58h18.216a2.186 2.186 0 002.186-2.186V0H2.185z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShape2Icon;
/* prettier-ignore-end */
