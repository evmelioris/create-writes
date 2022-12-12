export default function Message({ children, avatar, description, username }) {
    return(
        <div className="bg-white p-8 border-b-2 rounded-lg text-black">
            <div className="flex items-center"></div>
            <div>
                <img src={avatar} className="w-10 rounded-full"/>
                <h2>{username}</h2>
            </div>
            <div className="py-4">
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}