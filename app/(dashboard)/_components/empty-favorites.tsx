import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center ">
            <Image 
                src="/empty-favorites.svg"
                alt="Empty"
                height={140}
                width={140}
            />
            <h2 className="text-2xl font-semibold mt-6"> 
                No favorites board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try favoriting a board
            </p>
        </div>
    );
};