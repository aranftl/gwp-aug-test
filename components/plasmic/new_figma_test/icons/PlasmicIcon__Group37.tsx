// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group37Icon(props: Group37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M2.633.762A1.07 1.07 0 002.88 0a1.06 1.06 0 00-.704.364c-.152.176-.287.463-.252.733.27.023.54-.135.71-.335zm.244.388c-.391-.024-.724.221-.911.221-.187 0-.474-.21-.783-.204a1.155 1.155 0 00-.982.596C-.22 2.488.09 3.564.499 4.155c.199.292.438.614.754.602.298-.012.415-.193.777-.193.362 0 .467.193.783.187.327-.006.532-.292.73-.585.229-.333.322-.654.328-.672-.006-.006-.631-.246-.637-.965-.006-.602.49-.889.514-.906-.28-.415-.719-.462-.87-.474z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group37Icon;
/* prettier-ignore-end */
