
const ServicePage = () =>{
    return(
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-8 text-center">
                    My Services<span className="text-indigo-500">.</span>
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Tutoring */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Online Private Tutoring
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        One-to-one private tutoring held via Zoom or Google Meets focused on building strong programming and computer science fundamentals 
                        through clear explanations, examples, and guided problem-solving.
                    </p>
                    <button className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 mt-4 rounded-xl shadow hover:bg-indigo-500 hover:text-white-600 transition">
                        Learn More
                    </button>
                </div>


                    {/* Software Development */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Software Development
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                       I offer freelance software development for small projects, feature work, and bug fixes, with a 
                       focus on clear communication, realistic scope, and maintainable solutions.
                    </p>
                    <button className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 mt-10 rounded-xl shadow hover:bg-indigo-500 hover:text-white-600 transition">
                        Learn More
                    </button>
                </div>

                </div>
                    {/* Call to Action */}
                    <div className="mt-16 bg-indigo-600 text-white rounded-2xl shadow-lg p-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                        Ready to Take the Next Step?
                        </h2>
                        <p className="mb-6 text-lg max-w-2xl mx-auto">
                        If you're interested in one of my services, reach out directly via
                        email. Let me know which service you’d like to learn more about.
                        </p>
                        <a
                        href="mailto:yourname@example.com?subject=Service%20Inquiry"
                        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                        >
                        Send Me an Email
                        </a>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default ServicePage