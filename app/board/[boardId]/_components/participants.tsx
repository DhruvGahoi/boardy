
export const Participants = () => {
    return (
        <div className="absolute h-12 right-2 bg-white rounded-md flex items-center shadow-md">
            List of users
        </div>
    )
}

export const ParticipantsSkeleton = function ParticipantSkeleton() {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md w-[100px]" />
    )
}