"use client"

import Image from "next/image";
import { Button } from "@/components/ui/Button";
// import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { toast } from "sonner";

export const EmptyBoards = () => {

    const { mutate, pending } = useApiMutation(api.board.create);
    const { organization } = useOrganization();

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
         .then((id)=>{
            toast.success("Board created")
            //TODO : redirect to board/id
         })
         .catch(() => toast.error("Failed to create board"))
    }
    
    return (
        <div className="h-screen flex flex-col items-center justify-center ">
            <Image 
                src="/note.svg"
                alt="Empty"
                height={110}
                width={110}
            />
            <h2 className="text-2xl font-semibold mt-6"> 
                Create your first board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button size="lg" onClick={onClick} disabled={pending}>
                    Create board
                </Button>
            </div>
        </div>
    )
}