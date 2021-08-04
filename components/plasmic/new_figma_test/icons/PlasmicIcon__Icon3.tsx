// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
          "M.334 1.99c.184 0 .333.148.333.331 0 .183-.15.331-.334.331a.333.333 0 01-.332-.307L0 2.32c0-.183.15-.331.334-.33zM.336.994c.184 0 .333.148.333.332 0 .183-.15.33-.335.33a.333.333 0 01-.332-.307v-.024c0-.183.15-.332.334-.331zM.337 0C.521 0 .67.149.67.332.67.515.52.663.336.663A.333.333 0 01.004.356L.003.33c0-.182.15-.33.334-.33z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
