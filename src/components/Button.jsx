const Button = ({name}) => {
    return (
        <div>
            <button className="bg-gray-800 px-4 py-1 capitalize text-sm rounded-md whitespace-nowrap cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out">{name}</button>
        </div>
    )
}

export default Button