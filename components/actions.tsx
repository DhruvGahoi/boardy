"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { api } from "@/convex/_generated/api";

interface ActionsProps {
    children : React.ReactNode;
    side? : DropdownMenuContentProps["side"];
    sideOffSet? : DropdownMenuContentProps["sideOffset"];
    id : string;
    title : string;
}

export const Actions = ({
    children,
    side,
    sideOffSet,
    id,
    title
} : ActionsProps) => {
    
    const { mutate, pending } = useApiMutation(api.board.remove)

    const onCopyLink = () => [
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
         .then(() => toast.success("Link copied successfully"))
         .catch(() => toast.error("Failed to copy link"))
    ]

    const onDelete = () => {
        mutate({ id })
          .then(()=>toast.success("Board deleted successfully"))
          .catch(()=>toast.error("Failed to delete board"))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent 
             onClick={(e)=>e.stopPropagation()}
             side={side}
             sideOffset={sideOffSet}
             className="w-60"
            >
                <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
                    <Link2 className="h-4 w-4 mr-2"/>
                    Copy board Link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDelete} className="p-3 cursor-pointer">
                    <Trash2 className="h-4 w-4 mr-2"/>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}