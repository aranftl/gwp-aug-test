// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask49Icon(props: Mask49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
          "M0 14.877C0 6.674 6.674 0 14.877 0s14.877 6.674 14.877 14.877-6.674 14.877-14.877 14.877S0 23.08 0 14.877zM18.065 9.65a1.487 1.487 0 112.551 1.53l-5.356 8.927a1.492 1.492 0 01-1.276.722c-.391 0-.77-.155-1.052-.436l-3.57-3.57a1.489 1.489 0 010-2.104 1.486 1.486 0 012.103 0l2.224 2.222 4.376-7.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask49Icon;
/* prettier-ignore-end */
