// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M2.929 2.929c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0zM10.4 4.195c.844 0 1.52.697 1.52 1.541s-.697 1.541-1.52 1.541c-.844 0-1.54-.697-1.54-1.562 0-.844.696-1.52 1.54-1.52zm2.174 10.322a1.01 1.01 0 01-.21.359c-.55.57-1.225.908-2.027.908-.38 0-.74 0-1.119-.064-.612-.084-1.393-.844-1.288-1.646l.254-1.647c.169-.95.337-1.92.506-2.87 0-.064.021-.127.021-.19 0-.401-.126-.55-.527-.591a4.226 4.226 0 01-.507-.085c-.19-.063-.295-.232-.274-.38.02-.169.126-.274.337-.316.106-.021.233-.021.36-.021h2.912c.359 0 .57.168.57.527 0 .296-.042.591-.105.887-.19 1.098-.402 2.174-.591 3.272-.064.358-.148.717-.19 1.076a1.5 1.5 0 00.042.528c.063.232.232.359.464.338.19-.021.38-.085.57-.17.148-.063.274-.168.422-.21.253-.085.444.063.38.295z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
