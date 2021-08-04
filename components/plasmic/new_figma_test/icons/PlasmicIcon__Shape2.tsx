// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape2Icon(props: Shape2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 12"}
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
          "M16.707 1.2c0 .663-.535 1.201-1.195 1.201s-1.196-.538-1.196-1.2C14.316.538 14.85 0 15.512 0c.66 0 1.195.538 1.195 1.2zM5.92 4.719c.346-.795 1.286-1.507 2.456-1.507 2.062 0 2.92 1.59 2.92 3.213v4.967H9.317V6.987c0-.944-.214-2.12-1.485-2.12-1.252 0-1.846 1.093-1.846 2.153v4.37H4.007V3.444h1.88v1.275h.033zM0 11.389h1.979V3.442H0v7.947zM37.182 1.201c0 .662-.535 1.2-1.196 1.2h.001c-.66 0-1.196-.538-1.196-1.2 0-.663.536-1.201 1.196-1.201.66 0 1.195.538 1.195 1.2zm-4.404 2.238v1.76h2.22v6.191h1.979V5.2h2.218V3.438h-6.417zm-1.386 7.95h-1.979V3.442h1.979v7.947zm-19.089-6.19h2.22v6.191H16.5V5.199h2.218v-1.76h-6.416v1.76zm11.258 4.766c1.253 0 1.847-1.092 1.847-2.152V3.442h1.98v7.948h-1.88v-1.275h-.034c-.346.795-1.286 1.506-2.457 1.506-2.062 0-2.92-1.589-2.92-3.212V3.442h1.98v4.404c0 .944.214 2.12 1.484 2.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
