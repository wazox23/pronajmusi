export default function DashboardSkeletons(){
    const skeletonArray = Array.from({ length: 15 }, (_, index) => index + 1);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
            {skeletonArray.map((index) => (
                <div className="flex items-center justify-center" key={index}>
                    <div className="card skeleton w-95PERC h-95PERC border">
                        <div className="h-96"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}