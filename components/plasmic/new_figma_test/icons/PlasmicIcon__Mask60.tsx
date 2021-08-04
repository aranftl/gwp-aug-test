// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask60Icon(props: Mask60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M13.505 3.648h1.8c1.49 0 2.701 1.228 2.701 2.737v9.12c0 1.51-1.212 2.737-2.7 2.737H2.7c-1.49 0-2.7-1.228-2.7-2.737v-9.12c0-1.509 1.212-2.737 2.7-2.737h1.801v-.912C4.501 1.228 5.713 0 7.202 0h3.602c1.489 0 2.7 1.228 2.7 2.736v.912zM2.7 16.418h12.605c.496 0 .9-.41.9-.912V9.82l-2.71 1.647a2.68 2.68 0 01-1.39.39H5.9a2.68 2.68 0 01-1.39-.39L1.802 9.82v5.686c0 .502.404.912.9.912zm0-10.945h12.605c.496 0 .9.41.9.912v1.308l-3.636 2.21a.896.896 0 01-.464.13H5.9a.884.884 0 01-.463-.13L1.8 7.693V6.385c0-.503.404-.912.9-.912zm4.503-3.649c-.496 0-.9.41-.9.912v.913h5.401v-.913a.908.908 0 00-.9-.912h-3.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask60Icon;
/* prettier-ignore-end */
