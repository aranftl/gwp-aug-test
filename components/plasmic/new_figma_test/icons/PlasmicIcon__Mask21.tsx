// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask21Icon(props: Mask21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M2.012.124A.203.203 0 001.825 0H.203A.201.201 0 00.06.344l.81.806a.203.203 0 00.287 0l.811-.806a.2.2 0 00.044-.22"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask21Icon;
/* prettier-ignore-end */
