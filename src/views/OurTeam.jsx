const OurTeam = () => {
    const nameMemberGroup = [
        {
            id: 1,
            name: "Ivan Wahyu Nurpradana",
            role: "Project Manager",
        },
        {
            id: 2,
            name: "Fajar Muklis Ari Mukti",
            role: "Designer"
        },
        {
            id: 3,
            name: "Bima Aditya Rahmana",
            role: "Designer"
        },
        {
            id: 4,
            name: "Ida Bagus Ari Widhiana",
            role: "Coder"
        },
        {
            id: 5,
            name: "Fisi Shella Hayagi R",
            role: "Coder"
        },
        {
            id: 6,
            name: "Nurul Rifdah Umay",
            role: "Coder"
        },
    ]

    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center h-full my-32 lg:h-screen lg:my-0 gap-y-8">
                <div className="grid w-3/5 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {nameMemberGroup.map((items) => (
                        <div key={items.id}>
                            <div className="flex flex-col items-center gap-y-2">
                                <img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" className="rounded-lg" />
                                <div className="flex flex-col items-center gap-y-1">
                                    <h2 className="text-xl font-medium">{items.name}</h2>
                                    <p className="text-base font-light">{items.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam