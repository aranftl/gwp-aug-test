// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask44Icon(props: Mask44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 8"}
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
          "M0 6.558a.73.73 0 00.729.728h3.643a.73.73 0 00.729-.728V5.465c0-.781-.495-1.45-1.186-1.707.295-.336.457-.761.457-1.208v-.728a1.823 1.823 0 00-3.643 0v.728c0 .45.168.879.458 1.207A1.824 1.824 0 000 5.465v1.093zm1.775-5.505a1.098 1.098 0 011.547-.003c.207.21.321.485.321.775v.728a1.092 1.092 0 01-.544.944.364.364 0 00-.185.317v.197c0 .2.164.364.365.364.602 0 1.093.49 1.093 1.093v1.093H.728V5.468c0-.603.49-1.093 1.093-1.093a.364.364 0 00.365-.364v-.197c0-.13-.07-.251-.183-.316a1.092 1.092 0 01-.546-.945v-.728c0-.29.114-.565.318-.772zM2.85 5.065l.193-.193a.183.183 0 00-.129-.312h-.728a.182.182 0 00-.13.312l.195.193-.238.713a.182.182 0 00.044.187l.364.364a.182.182 0 00.258 0l.364-.364a.182.182 0 00.044-.187l-.237-.713z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask44Icon;
/* prettier-ignore-end */
