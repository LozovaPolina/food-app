import {
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";

export function getTouchEventData(
  e: MouseEvent | TouchEvent | ReactMouseEvent | ReactTouchEvent
) {return 'changedTouches' in e ? e.changedTouches[0] : e;}