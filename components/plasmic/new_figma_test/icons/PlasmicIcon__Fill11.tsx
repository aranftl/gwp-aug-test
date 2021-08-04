// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill11Icon(props: Fill11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 4"}
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
          "M6.401 2.042c0 .277-.15.563-.465.563-.32 0-.374-.307-.374-.554V.9h-.499v1.298c0 .424.216.84.736.84a.677.677 0 00.619-.394h.008v.333H6.9V.9h-.5v1.142zM3.1 1.36h.56v1.618h.498V1.36h.559V.9H3.099v.46zm4.31 1.617h.499V.9H7.41v2.077zM8.257.9v.46h.56v1.618h.498V1.36h.559V.9H8.257zm.81-.271c.166 0 .3-.141.3-.315a.308.308 0 00-.3-.314.308.308 0 00-.303.314c0 .174.135.315.302.315zM0 2.977h.499V.9H0v2.077zM2.11.841a.677.677 0 00-.619.394h-.008V.902h-.474v2.077h.499V1.837c0-.277.15-.563.465-.563.32 0 .374.307.374.554v1.151h.498V1.681c0-.424-.215-.84-.735-.84zM3.908.629A.309.309 0 004.21.314.308.308 0 003.908 0a.308.308 0 00-.301.314c0 .174.135.315.301.315z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill11Icon;
/* prettier-ignore-end */
