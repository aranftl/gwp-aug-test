// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group78Icon(props: Group78IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 555 388"}
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
        opacity={".3"}
        d={
          "M537.353.314c9.316 0 16.938 7.622 16.938 16.938v352.842c0 9.316-7.622 16.939-16.938 16.939h-520.1c-9.317 0-16.94-7.623-16.94-16.939V17.252C.314 7.936 7.937.314 17.254.314h520.1zm0-.314h-520.1C7.741 0 0 7.742 0 17.252v352.842c0 9.511 7.742 17.252 17.252 17.252H537.36c9.511 0 17.252-7.741 17.252-17.252V17.252C554.605 7.742 546.863 0 537.353 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group78Icon;
/* prettier-ignore-end */
