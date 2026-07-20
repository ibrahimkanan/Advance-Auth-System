const Input = ({ icon: Icon, ...props }) => {
    return (
        <div className="relative mb-6">
            {/* Fixed typo: pointer-none -> pointer-events-none */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon className="size-5 text-gray-500" />
            </div>
            <input
                {...props}
                className="block w-full pl-10 pr-4 py-2 text-sm rounded-md bg-neutral-950 text-gray-100 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-100 transition-colors"
            />
        </div>
    );
};

export default Input;
