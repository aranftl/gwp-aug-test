// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask46Icon(props: Mask46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M1.517.056C1.493.022 1.437 0 1.376 0H.153C.09 0 .035.022.012.056-.012.09 0 .13.045.156L.656.52c.03.018.07.027.108.027.04 0 .079-.009.108-.027l.612-.364c.044-.026.057-.066.033-.1"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask46Icon;
/* prettier-ignore-end */
