// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill5Icon(props: Fill5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 2"}
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
          "M3.538 1.13c0 .152-.083.31-.258.31-.176 0-.206-.17-.206-.306V.498h-.276v.717c0 .235.12.464.407.464a.374.374 0 00.342-.217h.004v.184h.262V.498h-.275v.631zM1.713.75h.309v.895h.275V.75h.31V.496h-.894V.75zm2.382.896h.275V.498h-.275v1.148zm.468-1.15V.75h.309v.895h.275V.75h.31V.496h-.894zM5.01.347a.17.17 0 00.166-.173A.17.17 0 005.011 0a.17.17 0 00-.167.174.17.17 0 00.167.173zM0 1.646h.276V.498H0v1.148zM1.166.463a.374.374 0 00-.342.218H.82V.497H.558v1.148h.275v-.631c0-.153.083-.311.258-.311.176 0 .206.17.206.306v.636h.276V.928c0-.235-.12-.465-.407-.465zM2.16.347a.17.17 0 00.167-.173A.17.17 0 002.16 0a.17.17 0 00-.167.174.17.17 0 00.167.173z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill5Icon;
/* prettier-ignore-end */
