import * as colors from './colors';
import * as textstyles from './textstyles';
import * as icons from './icons';
import * as sizes from './sizes';
import * as shadows from './shadows';
export { icons, textstyles, colors, sizes, shadows };
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export function setBreakpoints(rule: 'min-width' | 'max-width', breaks: string[]);
export function useBreakpoint<T extends string, R extends ReadonlyArray<string>>(def: T, variants: R): T | ElementType<R>;

import React from "react"
export interface CommonProps<T extends HTMLElement> {
  className?: string
  style?: React.CSSProperties
  innerRef?: React.MutableElementRef<T> | React.RefCallback<T>
  tabIndex?: number
  role?: string
  testId?: string
  disabled?: boolean
  onAuxClick?: React.MouseEventHandler<T>
  onAuxClickCapture?: React.MouseEventHandler<T>
  onClick?: React.MouseEventHandler<T>
  onClickCapture?: React.MouseEventHandler<T>
  onContextMenu?: React.MouseEventHandler<T>
  onContextMenuCapture?: React.MouseEventHandler<T>
  onDoubleClick?: React.MouseEventHandler<T>
  onDoubleClickCapture?: React.MouseEventHandler<T>
  onDrag?: React.DragEventHandler<T>
  onDragCapture?: React.DragEventHandler<T>
  onDragEnd?: React.DragEventHandler<T>
  onDragEndCapture?: React.DragEventHandler<T>
  onDragEnter?: React.DragEventHandler<T>
  onDragEnterCapture?: React.DragEventHandler<T>
  onDragExit?: React.DragEventHandler<T>
  onDragExitCapture?: React.DragEventHandler<T>
  onDragLeave?: React.DragEventHandler<T>
  onDragLeaveCapture?: React.DragEventHandler<T>
  onDragOver?: React.DragEventHandler<T>
  onDragOverCapture?: React.DragEventHandler<T>
  onDragStart?: React.DragEventHandler<T>
  onDragStartCapture?: React.DragEventHandler<T>
  onDrop?: React.DragEventHandler<T>
  onDropCapture?: React.DragEventHandler<T>
  onMouseDown?: React.MouseEventHandler<T>
  onMouseDownCapture?: React.MouseEventHandler<T>
  onMouseEnter?: React.MouseEventHandler<T>
  onMouseLeave?: React.MouseEventHandler<T>
  onMouseMove?: React.MouseEventHandler<T>
  onMouseMoveCapture?: React.MouseEventHandler<T>
  onMouseOut?: React.MouseEventHandler<T>
  onMouseOutCapture?: React.MouseEventHandler<T>
  onMouseOver?: React.MouseEventHandler<T>
  onMouseOverCapture?: React.MouseEventHandler<T>
  onMouseUp?: React.MouseEventHandler<T>
  onMouseUpCapture?: React.MouseEventHandler<T>
  onTouchCancel?: React.TouchEventHandler<T>
  onTouchCancelCapture?: React.TouchEventHandler<T>
  onTouchEnd?: React.TouchEventHandler<T>
  onTouchEndCapture?: React.TouchEventHandler<T>
  onTouchMove?: React.TouchEventHandler<T>
  onTouchMoveCapture?: React.TouchEventHandler<T>
  onTouchStart?: React.TouchEventHandler<T>
  onTouchStartCapture?: React.TouchEventHandler<T>
  onPointerDown?: React.PointerEventHandler<T>
  onPointerDownCapture?: React.PointerEventHandler<T>
  onPointerMove?: React.PointerEventHandler<T>
  onPointerMoveCapture?: React.PointerEventHandler<T>
  onPointerUp?: React.PointerEventHandler<T>
  onPointerUpCapture?: React.PointerEventHandler<T>
  onPointerCancel?: React.PointerEventHandler<T>
  onPointerCancelCapture?: React.PointerEventHandler<T>
  onPointerEnter?: React.PointerEventHandler<T>
  onPointerLeave?: React.PointerEventHandler<T>
  onPointerOver?: React.PointerEventHandler<T>
  onPointerOverCapture?: React.PointerEventHandler<T>
  onPointerOut?: React.PointerEventHandler<T>
  onPointerOutCapture?: React.PointerEventHandler<T>
  onGotPointerCapture?: React.PointerEventHandler<T>
  onGotPointerCaptureCapture?: React.PointerEventHandler<T>
  onLostPointerCapture?: React.PointerEventHandler<T>
  onLostPointerCaptureCapture?: React.PointerEventHandler<T>
  onScroll?: React.UIEventHandler<T>
  onScrollCapture?: React.UIEventHandler<T>
  onWheel?: React.WheelEventHandler<T>
  onWheelCapture?: React.WheelEventHandler<T>
  onKeyDown?: React.KeyboardEventHandler<T>
  onKeyDownCapture?: React.KeyboardEventHandler<T>
  onKeyPress?: React.KeyboardEventHandler<T>
  onKeyPressCapture?: React.KeyboardEventHandler<T>
  onKeyUp?: React.KeyboardEventHandler<T>
  onKeyUpCapture?: React.KeyboardEventHandler<T>
  onFocus?: React.FocusEventHandler<T>
  onFocusCapture?: React.FocusEventHandler<T>
  onBlur?: React.FocusEventHandler<T>
  onBlurCapture?: React.FocusEventHandler<T>
};
import Avatar from './Avatar';
import Badge from './Badge';
import Bullet from './Bullet';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import FormLabel from './FormLabel';
import IconButton from './IconButton';
import Input from './Input';
import List from './List';
import Menu from './Menu';
import ProgressBar from './ProgressBar';
import Radio from './Radio';
import Segmented from './Segmented';
import Select from './Select';
import Slider from './Slider';
import Switch from './Switch';
import Tabs from './Tabs';
import Tag from './Tag';
import TextArea from './TextArea';
import Toast from './Toast';
import ToggleButton from './ToggleButton';
import Tooltip from './Tooltip';
export { Avatar, Badge, Bullet, Button, Card, Checkbox, FormLabel, IconButton, Input, List, Menu, ProgressBar, Radio, Segmented, Select, Slider, Switch, Tabs, Tag, TextArea, Toast, ToggleButton, Tooltip };