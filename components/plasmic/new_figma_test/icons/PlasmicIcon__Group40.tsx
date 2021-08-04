// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group40Icon(props: Group40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M2.634.762A1.07 1.07 0 002.88 0a1.06 1.06 0 00-.703.364c-.153.176-.287.463-.252.733.27.023.539-.135.709-.335zm.243.388c-.391-.024-.724.222-.911.222-.187 0-.474-.21-.783-.205a1.155 1.155 0 00-.982.597c-.421.725-.111 1.8.298 2.391.199.293.438.614.754.603.298-.012.415-.193.777-.193.362 0 .467.193.783.187.327-.006.532-.292.73-.585.229-.333.322-.655.328-.672-.006-.006-.631-.246-.637-.965-.006-.603.49-.889.514-.907-.28-.415-.719-.461-.87-.473z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group40Icon;
/* prettier-ignore-end */
