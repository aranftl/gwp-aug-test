// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: oDroFXNWeS
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ProductHero from "../../ProductHero"; // plasmic-import: yL-tGJImrp/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_figma_test.module.css"; // plasmic-import: x8ztdr6NwjtFcF6gdhDwfr/projectcss
import * as sty from "./PlasmicProductHeroPage.module.css"; // plasmic-import: oDroFXNWeS/css

export type PlasmicProductHeroPage__VariantMembers = {};

export type PlasmicProductHeroPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductHeroPage__VariantsArgs;
export const PlasmicProductHeroPage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProductHeroPage__ArgsType = {};
type ArgPropType = keyof PlasmicProductHeroPage__ArgsType;
export const PlasmicProductHeroPage__ArgProps = new Array<ArgPropType>();

export type PlasmicProductHeroPage__OverridesType = {
  root?: p.Flex<"div">;
  productHero?: p.Flex<typeof ProductHero>;
};

export interface DefaultProductHeroPageProps {
  dataFetches: PlasmicProductHeroPage__Fetches;
}

function PlasmicProductHeroPage__RenderFunc(props: {
  variants: PlasmicProductHeroPage__VariantsArgs;
  args: PlasmicProductHeroPage__ArgsType;
  overrides: PlasmicProductHeroPage__OverridesType;
  dataFetches?: PlasmicProductHeroPage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{"Product Hero"}</title>
        <meta key="og:title" property="og:title" content={"Product Hero"} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <ProductHero
            data-plasmic-name={"productHero"}
            data-plasmic-override={overrides.productHero}
            className={classNames("__wab_instance", sty.productHero)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productHero"],
  productHero: ["productHero"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  productHero: typeof ProductHero;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductHeroPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductHeroPage__VariantsArgs;
    args?: PlasmicProductHeroPage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProductHeroPage__Fetches;
  } & Omit<PlasmicProductHeroPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductHeroPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductHeroPage__ArgProps,
      internalVariantPropNames: PlasmicProductHeroPage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProductHeroPage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductHeroPage";
  } else {
    func.displayName = `PlasmicProductHeroPage.${nodeName}`;
  }
  return func;
}

export const PlasmicProductHeroPage = Object.assign(
  // Top-level PlasmicProductHeroPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productHero: makeNodeComponent("productHero"),

    // Metadata about props expected for PlasmicProductHeroPage
    internalVariantProps: PlasmicProductHeroPage__VariantProps,
    internalArgProps: PlasmicProductHeroPage__ArgProps
  }
);

export default PlasmicProductHeroPage;
/* prettier-ignore-end */
