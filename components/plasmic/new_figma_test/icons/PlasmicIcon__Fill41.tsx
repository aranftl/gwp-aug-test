// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill41Icon(props: Fill41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 6"}
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
          "M0 .153h1.27v.841h.023C1.527.47 2.16 0 2.953 0c1.392 0 1.971 1.049 1.971 2.119v3.277H3.588V2.49c0-.622-.145-1.398-1.003-1.398-.847 0-1.248.721-1.248 1.42v2.884H0V.153z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill41Icon;
/* prettier-ignore-end */
