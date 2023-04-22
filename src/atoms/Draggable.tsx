import { RefObject } from "react";
import { DragEndEvent, DragItem, DragMoveEvent, DragPreviewRenderer, DragStartEvent, DropOperation, useDrag } from "react-aria";
import { getBorderColorValue, getBorderRadiusValue, getBorderSizeValue, getDimensionValue } from "../utils/reactSpectrum";

export interface DragOptions {
  /** Handler that is called when a drag operation is started. */
  onDragStart?: (e: DragStartEvent) => void;
  /** Handler that is called when the drag is moved. */
  onDragMove?: (e: DragMoveEvent) => void;
  /** Handler that is called when the drag operation is ended, either as a result of a drop or a cancellation. */
  onDragEnd?: (e: DragEndEvent) => void;
  /** A function that returns the items being dragged. */
  getItems?: () => DragItem[];
  /** The ref of the element that will be rendered as the drag preview while dragging. */
  preview?: RefObject<DragPreviewRenderer>;
  /** Function that returns the drop operations that are allowed for the dragged items. If not provided, all drop operations are allowed. */
  getAllowedDropOperations?: () => DropOperation[];
  /**
   * Whether the item has an explicit focusable drag affordance to initiate accessible drag and drop mode.
   * If true, the dragProps will omit these event handlers, and they will be applied to dragButtonProps instead.
   */
  hasDragButton?: boolean;

  draggableId?: string;
}

export function Draggable(props: DragOptions) {
  const {
    draggableId = "draggable", ...otherProps
  } = props;
  const { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        [ draggableId ]: 'true',
      }];
    },
    ...otherProps
  })

  return (
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        borderColor: getBorderColorValue("dark"),
        borderWidth: getBorderSizeValue("thin"),
        borderRadius: getBorderRadiusValue("regular"),
        borderStyle: "solid",
        padding: getDimensionValue("size-100"),
      }}
      {...dragProps}
    >
      Draggable
    </div>
  )
}
