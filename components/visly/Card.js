// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { RootPrimitive, ContainerPrimitive } from "./_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const CardContext = createContext(null);

function Card(_props) {
  const defaults = useContext(CardContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="2Fz35Fjkvs"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "2Fz35Fjkvs",
        scope: "4FsW7UYFoD",
        activeVariants: activeVariants,
      }}
    >
      <ContainerPrimitive
        key={"QehWRvvuFP"}
        id={"Slot_QehWRvvuFP"}
        className={
          "__visly_reset_7X7HTLRqyD __visly_scope_4FsW7UYFoD_QehWRvvuFP"
        }
        addSpacing={false}
      >
        {props.Content}
      </ContainerPrimitive>
    </RootPrimitive>
  );
}

Card.__variants = [];

export default Card;