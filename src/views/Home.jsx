import { Link } from "react-router-dom"

const Home = () => {

    

    return (
        <>
            <div className="container">
                <div className="flex flex-col items-center justify-center h-full my-32 lg:h-screen lg:my-0 gap-y-8">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h1 className="text-5xl font-extrabold text-emerald-600">React Redux Practice</h1>
                        <p className="text-2xl font-semibold text-emerald-400">From Group 2 Class B Afternoon</p>
                        <p className="text-lg font-semibold text-emerald-500">Lighter</p>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                        <Link className="px-4 py-2 text-white bg-blue-500 rounded-lg" to="/counter-preview">Go to Redux Basic</Link>
                        <Link className="px-4 py-2 text-white bg-blue-500 rounded-lg" to="/user-preview">Go to AsyncThunk</Link>
                        <Link className="px-4 py-2 text-white bg-blue-500 rounded-lg" to="/teams">See Our Team</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home