// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group77IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group77Icon(props: Group77IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 560 392"}
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
        opacity={".2"}
        d={
          "M539.793.314c10.552 0 19.134 8.582 19.134 19.134V372.29c0 10.552-8.582 19.134-19.134 19.134H19.448c-10.552 0-19.134-8.582-19.134-19.134V19.448C.314 8.896 8.896.314 19.448.314h520.345zm0-.314H19.448C8.752 0 0 8.752 0 19.448V372.29c0 10.696 8.752 19.448 19.448 19.448h520.351c10.697 0 19.448-8.752 19.448-19.448V19.448C559.241 8.752 550.489 0 539.793 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group77Icon;
/* prettier-ignore-end */
