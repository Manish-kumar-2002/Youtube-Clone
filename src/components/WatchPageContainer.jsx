import LiveChatConatainer from "./LiveChatContainer"
import WatchPage from "./WatchPage"

const WatchPageContainer = () => {
    return (
        <>
            <div className="md:flex w-full gap-4 p-4">
                <WatchPage />
                <LiveChatConatainer />
            </div>
        </>
    )
}

export default WatchPageContainer