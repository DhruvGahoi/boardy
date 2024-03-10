"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Ghost, Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "@/components/confirm-modal";
import { Button } from "@/components/ui/Button";
import { useRenameModal } from "@/store/use-rename-modal";

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
    const { onOpen } = useRenameModal();

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
                <DropdownMenuItem onClick={()=>onOpen(id, title)} className="p-3 cursor-pointer">
                    <Pencil className="h-4 w-4 mr-2"/>
                    Rename
                </DropdownMenuItem>
                <ConfirmModal 
                 header="Delete board?"
                 onConfirm={onDelete}
                 disabled={pending}
                 description="This will delete the board and all of its contents."
                >
                    <Button variant="ghost" className="p-3 cursor-pointer text-sm w-full justify-start font-normal">
                        <Trash2 className="h-4 w-4 mr-2"/>
                        Delete
                    </Button >
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}