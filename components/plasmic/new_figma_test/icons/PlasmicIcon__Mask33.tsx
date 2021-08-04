// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask33Icon(props: Mask33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M10.745 2.903h1.433c1.185 0 2.15.977 2.15 2.177v7.258c0 1.2-.965 2.177-2.15 2.177H2.149C.964 14.515 0 13.538 0 12.337V5.08c0-1.2.964-2.177 2.15-2.177h1.432v-.726C3.582.977 4.546 0 5.73 0h2.865c1.185 0 2.15.977 2.15 2.177v.726zm-8.597 10.16h10.03a.722.722 0 00.716-.725V7.813l-2.156 1.311c-.335.203-.717.31-1.106.31H4.694c-.389 0-.771-.107-1.105-.31l-2.157-1.31v4.524c0 .4.322.725.716.725zm0-8.709h10.03c.394 0 .716.326.716.726v1.04L10 7.88a.707.707 0 01-.368.103H4.694a.703.703 0 01-.368-.104L1.432 6.121V5.08c0-.4.322-.727.716-.727zm3.583-2.902a.722.722 0 00-.716.725v.726h4.298v-.726c0-.4-.322-.725-.717-.725H5.731z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask33Icon;
/* prettier-ignore-end */
