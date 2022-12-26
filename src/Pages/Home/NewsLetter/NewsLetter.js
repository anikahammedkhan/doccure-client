import React from 'react';

const NewsLetter = () => {
    return (
        <section className="w-3/4 mx-auto py-10 sm:py-16 lg:py-24"
        >
            <div className='grid grid-cols-3 overflow-visible'
                style={{
                    backgroundImage: 'url(https://doccure-html.dreamguystech.com/template/assets/img/blog/news-bg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                }}
            >
                <div className="col-span-2 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Grab Our Newsletter</h2>
                        <p className=" mx-auto mt-4 text-base leading-relaxed text-white">To receive latest offers and discounts from the shop.</p>
                    </div>

                    <form action="#" method="POST" className="mx-auto mt-12">
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                <label htmlFor="email" className="sr-only"></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email to get started"
                                    className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    required
                                />
                            </div>
                            <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <img src="https://doccure-html.dreamguystech.com/template/assets/img/blog/news-img.png" alt="news" className='' />
                </div>
            </div>

        </section>
    );
};

export default NewsLetter;