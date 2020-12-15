// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  SpacerPrimitive,
  TextPrimitive,
  IconPrimitive,
} from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";
import * as icons from "./icons";

const styles = [
  {
    type: "default",
    layers: {
      HxPKbCp77g: {
        none: {
          text: "Button",
        },
      },
      MvKJxShAHh: {
        none: {
          icon: icons.plus,
          useMask: true,
        },
        disabled: {
          useMask: true,
        },
      },
    },
  },
  {
    type: "enum",
    propName: "kind",
    values: [
      {
        propValue: "primary",
        layers: {
          MvKJxShAHh: {
            none: {
              useMask: true,
            },
          },
        },
      },
      {
        propValue: "secondary",
        layers: {
          MvKJxShAHh: {
            none: {
              useMask: true,
            },
          },
        },
      },
      {
        propValue: "danger",
        layers: {},
      },
      {
        propValue: "quiet",
        layers: {},
      },
    ],
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "large",
        layers: {},
      },
      {
        propValue: "small",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "withIcon",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "enum",
    propName: "kind",
    values: [
      {
        propValue: "primary",
        layers: {},
      },
      {
        propValue: "secondary",
        layers: {},
      },
      {
        propValue: "danger",
        layers: {},
      },
      {
        propValue: "quiet",
        layers: {},
      },
    ],
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "large",
        layers: {},
      },
      {
        propValue: "small",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "withIcon",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "kind",
    propValues: ["primary", "secondary", "danger", "quiet"],
  },
  {
    type: "enum",
    propName: "size",
    propValues: ["large", "small"],
  },
  {
    type: "boolean",
    propName: "withIcon",
  },
];

export const ButtonContext = createContext(null);

function Button(_props) {
  const defaults = useContext(ButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "root",
        scope: "57m21SveAo",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <IconPrimitive
            id={"Icon_MvKJxShAHh"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_57m21SveAo_MvKJxShAHh"
            }
            key={"MvKJxShAHh"}
            useMask={getStyle("MvKJxShAHh", "useMask")}
            src={
              exists(props.icon) ? props.icon : getStyle("MvKJxShAHh", "icon")
            }
          />
          <SpacerPrimitive
            id={"Spacer_A5DZiLXTPM"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_57m21SveAo_A5DZiLXTPM"
            }
            key={"A5DZiLXTPM"}
          />
          <TextPrimitive
            id={"text_HxPKbCp77g"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_57m21SveAo_HxPKbCp77g"
            }
            key={"HxPKbCp77g"}
            text={
              exists(props.text) ? props.text : getStyle("HxPKbCp77g", "text")
            }
            element={getStyle("HxPKbCp77g", "htmlElement")}
          />
        </>
      )}
    </ButtonRoot>
  );
}

Button.__variants = [
  {
    name: "kind",
    type: "group",
    variants: ["primary", "secondary", "danger", "quiet"],
  },
  {
    name: "size",
    type: "group",
    variants: ["large", "small"],
  },
  {
    name: "withIcon",
    type: "variant",
  },
];

export default Button;
