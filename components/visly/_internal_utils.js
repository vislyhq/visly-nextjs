// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
export function exists(val) {
  return !(val === undefined || val === null);
}
export function getStyle(values, layerId, styleName) {
  if (exists(values[layerId])) {
    return values[layerId][styleName];
  }

  return undefined;
}
export function getStyleFunc(values) {
  return (layerId, styleName) => {
    return getStyle(values, layerId, styleName);
  };
}
export function renderChildren(children, values) {
  if (typeof children === "function") {
    return children(getStyleFunc(values));
  }

  return children;
}
export let InteractionState;

(function (InteractionState) {
  InteractionState["None"] = "none";
  InteractionState["Hover"] = "hover";
  InteractionState["Pressed"] = "pressed";
  InteractionState["Focus"] = "focus";
  InteractionState["Disabled"] = "disabled";
})(InteractionState || (InteractionState = {}));

export let VariantPropType;

(function (VariantPropType) {
  VariantPropType["Default"] = "default";
  VariantPropType["Enum"] = "enum";
  VariantPropType["Boolean"] = "boolean";
})(VariantPropType || (VariantPropType = {}));

const propErrorDescriptions = {
  [VariantPropType.Boolean]: booleanPropErrorMessage,
  [VariantPropType.Enum]: enumPropErrorMessage,
};

function booleanPropErrorMessage(prop) {
  return `${prop.propName} is a boolean prop but was passed a non-boolean value.`;
}

function enumPropErrorMessage(prop) {
  return `${
    prop.propName
  } is an enum with supported values: ${prop.propValues.join(" | ")}`;
}

function validateVariantProp(prop, value) {
  if (prop.type === VariantPropType.Boolean) {
    return typeof value === "boolean";
  }

  return typeof value === "string" && prop.propValues.includes(value);
}

export function findSetVariantProps(propTypes, props) {
  if (!exists(props)) {
    return [];
  }

  return propTypes
    .filter((p) => exists(props[p.propName]))
    .reduce((arr, p) => {
      if (!validateVariantProp(p, props[p.propName])) {
        console.warn(
          `Invalid value for prop ${p.propName}. ${propErrorDescriptions[
            p.type
          ](p)}`
        );
        return arr;
      }

      switch (p.type) {
        case VariantPropType.Boolean:
          if (props[p.propName] === true) {
            return [
              ...arr,
              {
                propName: p.propName,
              },
            ];
          } else {
            return arr;
          }

        case VariantPropType.Enum:
          return [
            ...arr,
            {
              propName: p.propName,
              propValue: props[p.propName],
            },
          ];

        default:
          throw Error();
      }
    }, []);
}

function getStyles(styles, propValue) {
  switch (styles.type) {
    case "default":
      return styles.layers;

    case "boolean":
      return styles.layers;

    case "enum": {
      const container = styles.values.find((v) => v.propValue === propValue);

      if (!exists(container)) {
        console.error(
          `No styles found for prop ${styles.propName} with value ${propValue}`
        );
        return {};
      }

      return container.layers;
    }
  }
}

export function getRootClasses(args) {
  const variantClasses = [
    `__visly_default`,
    ...args.setVariantProps.map((p) =>
      exists(p.propValue)
        ? `__visly_${p.propName}-${p.propValue}`
        : `__visly_${p.propName}`
    ),
  ].join(" ");
  const stateClasses = args.states
    .map((state) => `__visly_state_${state}`)
    .join(" ");
  return `${getLayerClass({
    projectId: args.projectId,
    layerId: args.layerId,
    scope: args.scope,
  })} ${variantClasses} ${stateClasses}`;
}
export function getLayerHtmlId(layer) {
  if (exists(layer.name)) {
    return `${layer.name}_${layer.id}`;
  } else {
    return `${layer.type}_${layer.id}`;
  }
}
export function getLayerClass({ projectId, layerId, scope }) {
  const scopeClass = exists(scope) ? `__visly_scope_${scope}` : "";
  return `__visly_reset_${projectId} ${scopeClass}_${layerId}`;
}
export const entries = Object.entries;

function mapValues(obj, fn) {
  const acc = {};

  for (const [k, v] of entries(obj)) {
    acc[k] = fn(v);
  }

  return acc;
}

export function mergeDeep(...vals) {
  function merge(a, b) {
    if (
      exists(a) &&
      typeof a === "object" &&
      exists(b) &&
      typeof b === "object"
    ) {
      const out = { ...a };

      for (const [k, v] of entries(b)) {
        out[k] = merge(out[k], v);
      }

      return out;
    }

    return exists(b) ? b : a;
  }

  return vals.reduce(merge, {});
}
export function shallowPick(obj, predicate) {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}
export const stylesForState = (args) => {
  const { styles, states: _states = [], variants } = args;
  const stylesToMerge = [
    getStyles(styles.find((s) => s.type === "default")) || {},
  ];
  const states = [..._states];

  if (!states.includes(InteractionState.None)) {
    states.unshift(InteractionState.None);
  }

  if (exists(variants)) {
    for (const variant of variants) {
      const variantStyles = styles.find(
        (s) =>
          s.type !== VariantPropType.Default && s.propName === variant.propName
      );

      if (exists(variantStyles)) {
        stylesToMerge.push(getStyles(variantStyles, variant.propValue));
      }
    }
  }

  return mergeDeep(
    ...stylesToMerge.map((variantStyles) =>
      mapValues(variantStyles, (stylesPerState) =>
        mergeDeep({}, ...states.map((state) => stylesPerState[state]))
      )
    )
  );
};

function setRef(ref, element) {
  if (exists(ref)) {
    if (typeof ref === "function") {
      ref(element);
    } else {
      ref.current = element;
    }
  }
}

export function combineRef(ref1, ref2) {
  return (el) => {
    setRef(ref1, el);
    setRef(ref2, el);
  };
}
export function useIsInside(rootRef) {
  return useCallback(
    (target) => {
      if (!exists(rootRef)) return false;
      let parent = target;

      while (exists(parent)) {
        if (parent === rootRef.current) {
          return true;
        }

        parent = parent.parentNode;
      }

      return false;
    },
    [rootRef]
  );
}
export const props = [
  "bottom",
  "left",
  "right",
  "top",
  "width",
  "height",
  "x",
  "y",
];
export const useRect = ({ ref: refOpt, observe = true, deps = [] }) => {
  const [rect, setRect] = useState({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    x: -10000,
    y: -10000,
  });
  const [node, setNode] = useState(null);
  const ref = useCallback((node) => {
    setNode(node);
  }, []);
  useEffect(() => {
    if (exists(refOpt) && exists(refOpt.current)) {
      setNode(refOpt.current);
    }
  }, [refOpt]);
  useLayoutEffect(() => {
    if (exists(node)) {
      const measure = () => setRect(node.getBoundingClientRect());

      measure();

      if (observe) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);
        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node, observe, ...deps]);
  const forceMeasure = useCallback(() => {
    if (exists(node)) {
      window.requestAnimationFrame(() => setRect(node.getBoundingClientRect()));
    }
  }, [node]);
  return [rect, ref, forceMeasure];
};
export function useTimeout(callback, delay, deps) {
  return useEffect(() => {
    const handle = setTimeout(callback, delay);
    return () => clearTimeout(handle);
  }, [callback, delay]);
}
export const noop = () => {};
export const NoSelectStyles = {
  userSelect: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
};
export function makeCompositeDefaultProps(defaultPropValues, activeVariants) {
  const values = stylesForState({
    styles: defaultPropValues,
    states: [InteractionState.None],
    variants: activeVariants,
  });
  return (layerId) => {
    return exists(values[layerId]) ? values[layerId] : {};
  };
}