import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const UserPreview = () => {
    const userData = useSelector((state) => state.user.data);
    const isLoading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();

    const navigate = useNavigate(); 

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading... wait for second</div>
    }

    return (
        <>
            <div className="container">
                <div className="flex flex-col items-center justify-center h-screen gap-y-8">
                    <h1 className="text-2xl font-bold">User Detail</h1>
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="px-4 py-2 text-xl text-white bg-blue-500 rounded-lg"
                        >
                        Go Back
                    </button>
                    <table className="w-full text-sm text-left text-gray-400 rtl:text-right">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-500">
                            <tr className="text-nowrap">
                                <th className="px-3 py-3">
                                    No.
                                </th>
                                <th className="px-3 py-3">
                                    Nama
                                </th>
                                <th className="px-3 py-3">
                                    Email
                                </th>
                                <th className="px-3 py-3">
                                    No. Telp
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.map((items, index) => (
                                <tr key={items.id} className="text-gray-500 bg-gray-300 border-b border-gray-700">
                                    <td className="px-3 py-3">{index+1}</td>
                                    <td className="px-3 py-3">{items.name}</td>
                                    <td className="px-3 py-3">{items.email}</td>
                                    <td className="px-3 py-3">{items.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserPreview