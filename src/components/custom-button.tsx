function CustomButton({onClick,title}:{onClick:()=>void,title:string}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex-1 sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-medium text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {title}
        </button>
    )
}

export default CustomButton