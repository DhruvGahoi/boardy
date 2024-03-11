import { Skeleton } from "@/components/ui/skeleton"

export const Participant = () => {
    return (
        <div className="absolute h-12 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            List of users
        </div>
    )
}

Participant.Skeleton = function ParticipantSkeleton () {
    return (
        <div className="absolute h-12 right-2 bg-white rounded-md p-3 flex items-center shadow-md w=[100px]">
            <Skeleton className="h-full w-full bg-muted-100"/>
        </div>
    )
}