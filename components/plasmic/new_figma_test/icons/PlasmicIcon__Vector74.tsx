// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector74Icon(props: Vector74IconProps) {
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
          "M1.84 1.835c-.531-.199-.694-.33-.694-.578 0-.288.281-.508.666-.508a.92.92 0 01.72.372L3 .508A1.997 1.997 0 001.654 0C.843 0 .224.563.224 1.314c0 .63.288.955 1.127 1.256.215.067.422.156.618.262.169.099.27.28.27.474a.653.653 0 01-.66.649c-.012 0-.022 0-.035-.002a1.06 1.06 0 01-.976-.613L0 3.905c.41.604.907.871 1.594.871.928 0 1.581-.616 1.581-1.505-.016-.735-.318-1.064-1.335-1.436z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector74Icon;
/* prettier-ignore-end */
