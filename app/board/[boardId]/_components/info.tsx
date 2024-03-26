"use client"

import Link from "next/link"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Hint } from "@/app/(dashboard)/_components/hint"
import { useRenameModal } from "@/store/use-rename-modal"
import { Actions } from "@/components/actions"
import { Menu } from "lucide-react"

interface InfoProps {
    boardId : string
}



const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

const TabSeparator = () => {
    return (
        <div className="text-neutral-300 px-1.5">
            |
        </div>
    )
}


export const Info = ({boardId} : InfoProps) => {
    const data = useQuery(api.board.get, {
        id : boardId as Id<"boards">
    });

    const { onOpen } = useRenameModal();

    if(!data) return <InfoSkeleton/>
    return (
        <div className="top-2 left-2 absolute bg-white rounded-md px-1.5 flex items-center shadow-md">
            <Hint label="Go to Boards" side="bottom" sideOffset={10}>
                <Button asChild variant="board" className="px-2">
                    <Link href="/">
                        <Image 
                        src = "/logo.svg"
                        alt="Board Logo"
                        height={40}
                        width={40} 
                        />
                        <span className={cn("font-semibold text-xl ml-2 text-black", font.className)}>Boardy</span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />
            <Hint label= "Edit title" side="bottom" sideOffset={10}>
                <Button variant="board" className="text-base font-normal px-2"
                onClick={() => onOpen(data._id, data.title)}
                >
                    {data.title}
                </Button>
            </Hint>
            <TabSeparator/>
            <Actions 
             id = {data._id}
             title={data.title}
             side="bottom"
             sideOffSet={10}
            >
                <div>
                    <Hint label="Main menu" side="bottom" sideOffset={10 }>
                        <Button variant="board" size="icon">
                            <Menu/>
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    )
}

export const InfoSkeleton = function InfoSkeleton () {
    return (
        <div className="top-2 left-2 absolute bg-white rounded-md h-12 px-1.5 flex items-center shadow-md w-[300px]" />   
    )
}
