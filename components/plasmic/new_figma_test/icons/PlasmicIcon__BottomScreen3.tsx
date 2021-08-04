// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottomScreen3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottomScreen3Icon(props: BottomScreen3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 460 19"}
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
          "M459.09 0v4.897c0 7.465-6.108 13.572-13.573 13.572H13.573C6.108 18.47 0 12.362 0 4.897V0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottomScreen3Icon;
/* prettier-ignore-end */
