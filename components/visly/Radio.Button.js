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
  ContainerPrimitive,
} from "./_internal_primitives";
import { RadioGroupButtonRoot } from "./_internal_radio_group";

const styles = [
  {
    type: "default",
    layers: {
      Uxm5fcFGj9: {
        none: {
          text: "Radio option",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "selected",
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
    <RadioGroupButtonRoot
      {...props}
      key="radio-group-button-root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "radio-group-button-root",
        scope: "HqWzrd2AA8",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"container_AT18iiAE6f"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_HqWzrd2AA8_AT18iiAE6f"
            }
            key={"AT18iiAE6f"}
            addSpacing={false}
            element={getStyle("AT18iiAE6f", "htmlElement")}
          >
            {
              <ContainerPrimitive
                id={"Column_EmSXMFJYqH"}
                className={
                  "__visly_reset_7X7HTLRqyD __visly_scope_HqWzrd2AA8_EmSXMFJYqH"
                }
                key={"EmSXMFJYqH"}
                addSpacing={false}
                element={getStyle("EmSXMFJYqH", "htmlElement")}
              >
                {null}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <SpacerPrimitive
            id={"Spacer_C48TbUNQUB"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_HqWzrd2AA8_C48TbUNQUB"
            }
            key={"C48TbUNQUB"}
          />
          <TextPrimitive
            id={"text_Uxm5fcFGj9"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_HqWzrd2AA8_Uxm5fcFGj9"
            }
            key={"Uxm5fcFGj9"}
            text={
              exists(props.text) ? props.text : getStyle("Uxm5fcFGj9", "text")
            }
            element={getStyle("Uxm5fcFGj9", "htmlElement")}
          />
        </>
      )}
    </RadioGroupButtonRoot>
  );
}

Button.__variants = [
  {
    name: "selected",
    type: "variant",
  },
];

export default Button;
