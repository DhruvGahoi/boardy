import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
    return (
        <div className="absolute h-12 right-2 bg-white rounded-md flex items-center shadow-md">
            List of users
        </div>
    )
}

Participants.Skeleton = function ParticipantSkeleton() {
    return (
        <div className="absolute h-12 right-2 bg-white rounded-md flex items-center shadow-md w-[100px]">
            <Skeleton className="h-full w-full bg-muted-100"/>
        </div>
    )
}