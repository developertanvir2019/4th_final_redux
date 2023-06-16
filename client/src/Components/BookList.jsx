import React, { useEffect } from 'react';
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/books/thunk/fetchBooks';
import { statusChange } from '../redux/filter/action';

const BookList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks)
    }, [dispatch])
    const allBooks = useSelector(state => state.books)
    const allfilter = useSelector(state => state.filter)
    const handleStatusChange = (status) => {
        dispatch(statusChange(status))
    }


    console.log('777', allBooks);
    return (
        <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button onClick={() => handleStatusChange('All')} className={`filter-btn ${allfilter?.status === "All" && "active-filter"}`} id="lws-filterAll">All</button>
                    <button onClick={() => handleStatusChange('Featured')} className={`filter-btn ${allfilter?.status === "Featured" && "active-filter"}`} id="lws-filterFeatured">Featured</button>
                </div>
            </div>
            <div className="lws-bookContainer">
                {/* <!-- Card 1 --> */}

                {
                    allBooks?.filter(book => {
                        const { status } = allfilter;
                        switch (status) {
                            case 'All':
                                return book;
                            case 'Featured':
                                return book.featured;

                            default:
                                return true;
                        }
                    })

                        .map(book => <Book key={book.id} book={book} />)
                }

            </div>
        </div>
    );
};

export default BookList;