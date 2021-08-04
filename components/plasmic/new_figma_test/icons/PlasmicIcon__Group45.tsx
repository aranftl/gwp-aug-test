// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group45Icon(props: Group45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 9"}
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
          "M4.698 1.36c.293-.366.491-.858.44-1.36-.43.021-.952.283-1.255.65-.272.313-.512.825-.45 1.306.481.042.962-.24 1.265-.596zm.435.691c-.699-.042-1.293.396-1.627.396-.333 0-.844-.375-1.397-.365A2.06 2.06 0 00.358 3.146C-.392 4.44.16 6.359.89 7.412c.354.522.781 1.096 1.344 1.075.532-.02.74-.344 1.387-.344.646 0 .834.344 1.397.334.584-.01.949-.522 1.303-1.044.407-.594.573-1.168.584-1.2-.01-.01-1.126-.438-1.136-1.72-.01-1.075.875-1.586.917-1.617-.5-.74-1.282-.824-1.553-.845z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group45Icon;
/* prettier-ignore-end */
