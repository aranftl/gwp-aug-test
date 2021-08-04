// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreateIcon(props: CreateIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M13.098 7.608l-4.14-.004.005-4.14a.69.69 0 00-1.38 0l-.005 4.14-4.14-.006a.69.69 0 000 1.38l4.14.005-.006 4.14a.69.69 0 001.38 0l.006-4.14 4.14.005a.69.69 0 000-1.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreateIcon;
/* prettier-ignore-end */
