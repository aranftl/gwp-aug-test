// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group46Icon(props: Group46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 10"}
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
          "M2.934 0c1.518 0 2.575 1.047 2.575 2.57 0 1.53-1.079 2.582-2.613 2.582H1.215v2.673H0V0h2.934zm-1.72 4.132h1.394c1.058 0 1.66-.57 1.66-1.556 0-.987-.602-1.551-1.654-1.551h-1.4v3.107zm4.612 2.072c0-.998.764-1.61 2.12-1.686l1.562-.093v-.439c0-.634-.429-1.014-1.144-1.014-.678 0-1.101.325-1.204.835H6.054c.065-1.03.943-1.79 2.353-1.79 1.383 0 2.267.733 2.267 1.877v3.931H9.55v-.938h-.027c-.33.635-1.052 1.036-1.8 1.036-1.117 0-1.898-.694-1.898-1.719zm3.682-.515v-.45l-1.405.087c-.7.048-1.095.358-1.095.846 0 .498.412.824 1.041.824.819 0 1.459-.564 1.459-1.307zm2.226 4.234v-.949c.087.022.282.022.38.022.542 0 .835-.228 1.013-.814 0-.01.104-.347.104-.352l-2.06-5.71h1.268l1.442 4.642h.022l1.442-4.642h1.237l-2.137 6.003c-.488 1.382-1.052 1.827-2.234 1.827-.098 0-.39-.01-.477-.027z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group46Icon;
/* prettier-ignore-end */
