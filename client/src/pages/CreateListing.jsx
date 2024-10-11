const CreateListing = () => {
    return (
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
            <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <input
                        className="border p-3 rounded-lg"
                        type="text"
                        placeholder="Name"
                        id="name"
                        maxLength="62"
                        minLength='10'
                        required
                    />
                    <textarea
                        className="border p-3 rounded-lg"
                        type="text"
                        placeholder="Description"
                        id="description"
                        required
                    />
                    <input
                        className="border p-3 rounded-lg"
                        type="text"
                        placeholder="Address"
                        id="adress"
                        required
                    />
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-2">
                            <div className=""><input type="checkbox" id="sale" className="w-5" /></div>
                            <span>Sell</span>
                        </div>
                        <div className="flex gap-2">
                            <div className=""><input type="checkbox" id="rent" className="w-5" /></div>
                            <span>Rent</span>
                        </div>
                        <div className="flex gap-2">
                            <div className=""><input type="checkbox" id="parking" className="w-5" /></div>
                            <span>Parking spot</span>
                        </div>
                        <div className="flex gap-2">
                            <div className=""><input type="checkbox" id="furnished" className="w-5" /></div>
                            <span>Furnished</span>
                        </div>
                        <div className="flex gap-2">
                            <div className=""><input type="checkbox" id="offer" className="w-5" /></div>
                            <span>Offer</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <input type="number" id="bedrooms" min='1' max='10' required className="p-3 border-gray-300 rounded-lg" />
                            <p>Beds</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="bathrooms" min='1' max='10' required className="p-3 border-gray-300 rounded-lg" />
                            <p>Baths</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="regularPrice" min='1' max='10' required className="p-3 border-gray-300 rounded-lg" />
                            <div className="flex flex-col items-center">
                                <p>Regular price</p>
                                <span className="text-xs">($ / month)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="discountPrice" min='1' max='10' required className="p-3 border-gray-300 rounded-lg" />
                            <div className="flex flex-col items-center">
                                <p>Discounted price</p>
                                <span className="text-xs">($ / month)</span>
                            </div>                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex1  gap-4">
                    <p className="font-semibold">Images:<span className="font-normal text-gray-600 ml-2">the first image will be the cover (max 6)</span></p>
                    <div className="flex gap-4">
                        <input className="p-3 border border-gray-300 rounded w-full" type='file' id='images' accept='image/*' multiple />
                        <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:-80">upload</button>
                    </div>
                    <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95" >Create Listing</button>
                </div>
            </form>
        </main>
    )
}

export default CreateListing