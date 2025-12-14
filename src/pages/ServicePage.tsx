
const ServicePage = () =>{
    return(
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-50 py-12 px-6">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-8 text-center">
                    My Services<span className="text-indigo-500">.</span>
                </h1>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Tutoring */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Tutoring
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        [Placecholder content] - Personalized tutoring in a range of subjects, tailored to your
                        learning style. I focus on making concepts clear, practical, and
                        easy to apply.
                    </p>
                    </div>

                    {/* Marketing */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Marketing
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        [Placecholder content] - From crafting effective strategies to executing online campaigns,
                        I help businesses grow their presence through social media,
                        search, and email marketing.
                    </p>
                    </div>

                    {/* Software Development */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Software Development
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                       [Placecholder content] - Building clean, efficient, and scalable software solutions—from
                        web applications to technical problem-solving—tailored to your
                        needs.
                    </p>
                </div>

                </div>
                    {/* Call to Action */}
                    <div className="mt-16 bg-purple-600 text-white rounded-2xl shadow-lg p-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                        Ready to Take the Next Step?
                        </h2>
                        <p className="mb-6 text-lg max-w-2xl mx-auto">
                        If you're interested in one of my services, reach out directly via
                        email. Let me know which service you’d like to learn more about,
                        and I’ll get back to you as soon as possible.
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