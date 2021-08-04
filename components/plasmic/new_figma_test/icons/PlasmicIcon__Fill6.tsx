// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill6Icon(props: Fill6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M.66 3.093h.593c.34 0 .828-.067.828-.545 0-.38-.267-.514-.802-.514H.66v1.06zm0-1.613h.588c.44 0 .676-.18.676-.493 0-.324-.236-.453-.734-.453H.66v.946zM0 0h1.447c.561 0 1.138.252 1.138.915 0 .411-.262.683-.645.797v.01c.466.062.802.37.802.858 0 .792-.703 1.06-1.405 1.06H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill6Icon;
/* prettier-ignore-end */
