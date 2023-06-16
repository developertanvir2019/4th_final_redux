import './App.css';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList />
            <BookForm />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
