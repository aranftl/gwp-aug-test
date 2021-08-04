// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill33Icon(props: Fill33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 8"}
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
          "M1.403 6.575h1.26c.724 0 1.76-.142 1.76-1.158 0-.808-.568-1.092-1.705-1.092H1.403v2.25zm0-3.429h1.248c.936 0 1.438-.382 1.438-1.048 0-.688-.502-.962-1.56-.962H1.404v2.01zM0 0h3.075c1.192 0 2.418.535 2.418 1.944 0 .874-.558 1.453-1.37 1.693v.022c.99.131 1.704.786 1.704 1.824 0 1.682-1.493 2.25-2.986 2.25H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill33Icon;
/* prettier-ignore-end */
