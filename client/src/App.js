import './SASS/style.scss';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import { Provider } from "react-redux"
import store from './redux/store';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('')
  return (
    <Provider store={store}>
      <div>
        <Navbar setSearchText={setSearchText} />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList searchText={searchText} />
            <BookForm />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
