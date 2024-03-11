import { Info } from "./info";
import { Loader } from "lucide-react";
import { Participant } from "./participant";

export const Loading = () => {
    return (
        <main className="h-screen w-full bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
            <Info.Skeleton />
            <Participant.Skeleton />
        </main>
    )
}