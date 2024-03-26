"use client"

import { useState } from "react"
import { CanvasMode, CanvasState } from "@/types/canvas"

import { useCanRedo, useCanUndo, useHistory, useSelf } from "@/liveblocks.config"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

interface CanvasProps {
    boardId : string
}

export const Canvas = ({boardId} : CanvasProps) => {

    const [canavasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    })

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const info = useSelf((me)=>me.info)
    console.log(info)

    return (
        <main className="h-screen w-full bg-neutral-100 touch-none">
            <Info boardId={boardId}/>
            <Participants />
            <Toolbar
             canvasSate={canavasState}
             setCanvasState={setCanvasState}
             canRedo={canRedo}
             canUndo={canUndo}
             undo={history.undo}
             redo={history.redo}
            />
        </main>
    )
}