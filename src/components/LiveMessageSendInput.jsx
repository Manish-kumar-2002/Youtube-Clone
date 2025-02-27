const LiveMessageSendInput = () => {
    return(
        <div className="flex gap-3">
            <input text="text" className="border px-4 py-1 text-md w-full rounded-full" />
            <button className="cursor-pointer"><i className="fa-solid fa-share text-2xl"></i></button>
        </div>
    )
}
export default LiveMessageSendInput