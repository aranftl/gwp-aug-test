// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Stroke16Copy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Stroke16Copy2Icon(props: Stroke16Copy2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 1"}
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
          "M56.97 0c-.045 0 0 .045 0 .202 0-.046-.045 0 0 0H.203C.045.202 0 .156 0 .202 0 .045.045 0 .203 0H56.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke16Copy2Icon;
/* prettier-ignore-end */
