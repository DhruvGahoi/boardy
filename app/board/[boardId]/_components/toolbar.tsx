import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react"
import { ToolButton } from "./tool-button";
import { CanvasState } from "@/types/canvas";


interface ToolbarProps {
    canvasSate: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

export const Toolbar = ({
    canvasSate,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo
} : ToolbarProps) => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton 
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Text"
                    icon={Type}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Sticky Note"
                    icon={StickyNote}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Rectangle"
                    icon={Square}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Pen"
                    icon={Pencil}
                    onClick={() => {}}
                    isActive={false}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
            <ToolButton 
                    label="Undo"
                    icon={Undo2}
                    onClick={undo}
                    isActive={!canUndo}
                />
                <ToolButton 
                    label="Redo"
                    icon={Redo2}
                    onClick={redo}
                    isActive={!canRedo}
                />
            </div>
        </div>
    )
}

export const ToolbarSkeleton = function ToolbarSkeleton () {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 shadow-md bg-white h-[360px] w-[52px]"/>
    )
}