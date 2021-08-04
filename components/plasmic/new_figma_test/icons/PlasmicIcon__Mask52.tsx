// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask52Icon(props: Mask52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 21"}
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
          "M10.461.06C11.61-.004 12.756 0 13.904 0h5.816c1.17 0 2.317-.005 3.465.06 1.043.06 2.059.187 3.07.47a10.052 10.052 0 015.332 15.792 10.076 10.076 0 01-5.332 3.6c-1.011.283-2.027.409-3.07.469-1.148.066-2.294.06-3.442.06h-5.818c-1.17 0-2.316.006-3.464-.06-1.042-.06-2.058-.186-3.07-.47a10.076 10.076 0 01-5.331-3.6 10.05 10.05 0 010-12.191A10.073 10.073 0 017.39.53C8.403.247 9.42.12 10.461.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask52Icon;
/* prettier-ignore-end */
