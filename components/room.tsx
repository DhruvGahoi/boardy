"use client"

import { ReactNode } from "react"
import { ClientSideSuspense } from "@liveblocks/react" //npm package

import { RoomProvider } from "@/liveblocks.config" //alias

interface RoomProp {
    children : ReactNode,
    roomId : string;
    fallback : NonNullable<ReactNode> | null
}

export const Room = ({children, roomId, fallback} : RoomProp) => {
    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )

}

