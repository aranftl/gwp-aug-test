// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill21Icon(props: Fill21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M3.45 1.904c0-.573-.33-1.072-1.065-1.072-.669 0-1.206.453-1.253 1.072h2.317zm1.12.793H1.13c.048.628.632 1.09 1.291 1.09.565 0 .942-.222 1.197-.573l.754.591c-.443.591-1.084.887-1.941.887C1.036 4.692 0 3.814 0 2.373 0 .943 1.027 0 2.393 0c1.262 0 2.186.803 2.186 2.401 0 .102 0 .194-.01.296z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill21Icon;
/* prettier-ignore-end */
