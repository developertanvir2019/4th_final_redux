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
        <div class="order-2 xl:-order-1">
            <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                    <button onClick={() => handleStatusChange('All')} class={`filter-btn ${allfilter?.status === "All" && "active-filter"}`} id="lws-filterAll">All</button>
                    <button onClick={() => handleStatusChange('Featured')} class={`filter-btn ${allfilter?.status === "Featured" && "active-filter"}`} id="lws-filterFeatured">Featured</button>
                </div>
            </div>
            <div class="lws-bookContainer">
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