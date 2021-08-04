// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path2Icon(props: Path2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M1.54.124C1.516.05 1.459 0 1.396 0H.156C.091 0 .035.049.011.124a.248.248 0 00.033.22l.621.806c.03.04.07.06.11.06.04 0 .08-.02.11-.06l.62-.806a.247.247 0 00.034-.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path2Icon;
/* prettier-ignore-end */
