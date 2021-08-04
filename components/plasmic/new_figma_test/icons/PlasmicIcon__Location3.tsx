// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Location3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Location3Icon(props: Location3IconProps) {
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
          "M9.42 14.877h-.061a1.352 1.352 0 01-1.258-.992l-1.28-4.477-4.477-1.28a1.368 1.368 0 01-.112-2.593l10.791-4.092a1.367 1.367 0 011.763 1.763l-4.092 10.792a1.347 1.347 0 01-1.274.879zm4.083-12.172L2.714 6.799l4.84 1.41a.676.676 0 01.465.466l1.38 4.838 4.125-10.787-.021-.021z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Location3Icon;
/* prettier-ignore-end */
