// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask59Icon(props: Mask59IconProps) {
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
          "M13.524 3.652h1.804c1.49 0 2.704 1.228 2.704 2.738v9.129c0 1.51-1.213 2.739-2.704 2.739H2.705C1.214 18.258 0 17.029 0 15.519V6.39c0-1.51 1.214-2.738 2.705-2.738h1.803v-.913C4.508 1.229 5.722 0 7.213 0h3.606c1.492 0 2.705 1.229 2.705 2.739v.913zM2.705 16.43h12.623c.497 0 .902-.41.902-.912V9.826l-2.714 1.648a2.68 2.68 0 01-1.392.39H5.91c-.49 0-.971-.134-1.392-.39L1.804 9.827v5.69c0 .503.404.913.901.913zm0-10.954h12.623a.91.91 0 01.902.913v1.309L12.588 9.91a.891.891 0 01-.464.13H5.91a.885.885 0 01-.464-.13L1.804 7.698v-1.31c0-.502.404-.912.901-.912zm4.507-3.653a.909.909 0 00-.901.913v.912h5.41v-.912a.909.909 0 00-.902-.913H7.212z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask59Icon;
/* prettier-ignore-end */
