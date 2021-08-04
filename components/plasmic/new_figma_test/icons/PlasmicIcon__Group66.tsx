// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group66Icon(props: Group66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M5.126 1.484c.32-.4.536-.936.479-1.484-.468.023-1.038.308-1.368.708-.297.342-.56.901-.49 1.426.524.046 1.048-.262 1.379-.65zm.474.753c-.763-.045-1.41.432-1.775.432-.364 0-.921-.41-1.524-.398a2.247 2.247 0 00-1.91 1.16C-.43 4.843.174 6.936.97 8.086c.386.568.852 1.195 1.466 1.172.58-.023.808-.376 1.513-.376.705 0 .91.376 1.524.365.637-.012 1.035-.57 1.422-1.139.443-.648.625-1.274.636-1.308-.01-.011-1.228-.478-1.239-1.878-.011-1.172.955-1.73 1-1.764-.545-.807-1.398-.898-1.694-.921z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group66Icon;
/* prettier-ignore-end */
