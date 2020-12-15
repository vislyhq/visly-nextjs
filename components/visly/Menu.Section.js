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
import { MenuSectionRoot } from "./_internal_menu";

const styles = [
  {
    type: "default",
    layers: {
      Hu741YxDVp: {
        none: {
          text: "Section Title",
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
];

const variantPropTypes = [];

export const SectionContext = createContext(null);

function Section(_props) {
  const defaults = useContext(SectionContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <MenuSectionRoot
      {...props}
      key="menu-section"
      internal={{
        styles,
        projectId: "7X7HTLRqyD",
        layerId: "menu-section",
        scope: "2E5XfMakVt",
        activeVariants,
      }}
      vislyChildren={(getStyle) => (
        <>
          <SpacerPrimitive
            id={"Spacer_XQs9gMDdfC"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_2E5XfMakVt_XQs9gMDdfC"
            }
            key={"XQs9gMDdfC"}
          />
          <ContainerPrimitive
            id={"Row_ADXZirGjWD"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_2E5XfMakVt_ADXZirGjWD"
            }
            key={"ADXZirGjWD"}
            addSpacing={false}
            element={getStyle("ADXZirGjWD", "htmlElement")}
          >
            {null}
          </ContainerPrimitive>
          <SpacerPrimitive
            id={"Spacer_PhESA9kLpn"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_2E5XfMakVt_PhESA9kLpn"
            }
            key={"PhESA9kLpn"}
          />
          <ContainerPrimitive
            id={"Column_2D9XMQxXY3"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_2E5XfMakVt_2D9XMQxXY3"
            }
            key={"2D9XMQxXY3"}
            addSpacing={false}
            element={getStyle("2D9XMQxXY3", "htmlElement")}
          >
            {
              <TextPrimitive
                id={"text_Hu741YxDVp"}
                className={
                  "__visly_reset_7X7HTLRqyD __visly_scope_2E5XfMakVt_Hu741YxDVp"
                }
                key={"Hu741YxDVp"}
                text={
                  exists(props.title)
                    ? props.title
                    : getStyle("Hu741YxDVp", "text")
                }
                element={getStyle("Hu741YxDVp", "htmlElement")}
              />
            }
          </ContainerPrimitive>
        </>
      )}
    >
      {props.children}
    </MenuSectionRoot>
  );
}

Section.__variants = [];
Section.__collectionType = "Section";

export default Section;