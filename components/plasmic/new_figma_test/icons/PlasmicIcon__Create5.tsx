// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Create5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Create5Icon(props: Create5IconProps) {
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
          "M13.035 7.572l-4.12-.005.005-4.12a.687.687 0 10-1.374 0l-.005 4.12-4.12-.006a.687.687 0 000 1.374l4.12.005-.005 4.12a.687.687 0 001.373 0l.006-4.12 4.12.005a.687.687 0 100-1.373z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Create5Icon;
/* prettier-ignore-end */
