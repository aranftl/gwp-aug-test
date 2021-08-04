// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask13Icon(props: Mask13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M3.431.404H.203a.202.202 0 110-.404H3.43a.202.202 0 110 .404zm0 1.01H.2a.202.202 0 110-.404h3.23a.202.202 0 110 .404zM.2 2.42h3.23a.202.202 0 100-.404H.2a.202.202 0 100 .404z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask13Icon;
/* prettier-ignore-end */
