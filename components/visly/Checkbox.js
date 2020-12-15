// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { IconPrimitive } from "./_internal_primitives";
import { CheckboxRoot } from "./_internal_checkbox";
import * as icons from "./icons";

const styles = [
  {
    type: "default",
    layers: {
      checkmark: {
        none: {
          icon: icons.checkmark,
          useMask: true,
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "checked",
    layers: {
      checkmark: {
        none: {
          icon: icons.checkmark,
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "checked",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "checked",
  },
];

export const CheckboxContext = createContext(null);

function Checkbox(_props) {
  const defaults = useContext(CheckboxContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <CheckboxRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "root",
        scope: "3LiUQ4dVhC",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          id={"icon_checkmark"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_3LiUQ4dVhC_checkmark"
          }
          key={"checkmark"}
          useMask={getStyle("checkmark", "useMask")}
          src={getStyle("checkmark", "icon")}
        />
      )}
    </CheckboxRoot>
  );
}

Checkbox.__variants = [
  {
    name: "checked",
    type: "variant",
  },
];

export default Checkbox;
