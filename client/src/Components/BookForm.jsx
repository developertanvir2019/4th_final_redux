import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBook from '../redux/books/thunk/addBook';
import fetchBooks from '../redux/books/thunk/fetchBooks';

const BookForm = () => {
    const initialState = {
        id: '',
        name: '',
        author: '',
        thumbnail: '',
        price: '',
        rating: '',
        featured: false
    }
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState(initialState);
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setBookData((prevData) => ({
            ...prevData,
            [name]: inputValue
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addBook(bookData))
        dispatch(fetchBooks)
        // setBookData(initialState)
    };



    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form onSubmit={handleSubmit} className="book-form">
                    <div className="space-y-2">
                        <label for="name">Book Name</label>
                        <input required className="text-input" type="text" id="input-Bookname" name="name" value={bookData.name}
                            onChange={handleInputChange} />
                    </div>

                    <div className="space-y-2">
                        <label for="category">Author</label>
                        <input required className="text-input" type="text" id="input-Bookauthor" name="author" value={bookData.author}
                            onChange={handleInputChange} />
                    </div>

                    <div className="space-y-2">
                        <label for="image">Image Url</label>
                        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" value={bookData.thumbnail}
                            onChange={handleInputChange} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label for="price">Price</label>
                            <input required className="text-input" type="number" id="input-Bookprice" name="price" value={bookData.price}
                                onChange={handleInputChange} />
                        </div>

                        <div className="space-y-2">
                            <label for="quantity">Rating</label>
                            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" value={bookData.rating}
                                onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={bookData.featured}
                            onChange={handleInputChange} />
                        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default BookForm;