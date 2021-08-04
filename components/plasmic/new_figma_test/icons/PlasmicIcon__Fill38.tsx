// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill38Icon(props: Fill38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M4.08 2.25c0-.677-.39-1.267-1.26-1.267-.79 0-1.426.535-1.481 1.267h2.74zm1.324.94H1.337c.056.742.747 1.288 1.526 1.288.669 0 1.115-.262 1.415-.677l.892.699c-.524.7-1.282 1.049-2.295 1.049C1.225 5.549 0 4.51 0 2.807 0 1.114 1.215 0 2.83 0c1.493 0 2.585.95 2.585 2.84 0 .12 0 .23-.011.35z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill38Icon;
/* prettier-ignore-end */
