function Profile() {
    return (
        <div className="flex-1">
            <div className="border border-neutral-400/30 p-4 rounded-md w-full">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-16 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    
                </div>
                <p className="font-bold text-lg">Jhon Smith</p>
                <p className="text-neutral-500">jhonsmith@gmail.com</p>
                <div className="w-full bg-neutral-400/20 h-1 my-8"></div>
            </div>

        </div>
    )
}

export default Profile