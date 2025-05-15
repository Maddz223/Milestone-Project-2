const SkeletonLoader = () => {
    return (
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg p-2 max-w-[200px]">
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
            <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
    );
};

export default SkeletonLoader;