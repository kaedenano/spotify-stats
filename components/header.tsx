export default function header() {

    return (
        <>
            <header className="text-gray-600 body-font mx-32">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="hover:text-gray-900">Fourth Link</a>
                    </nav>
                </div>
            </header>
        </>
    )

}