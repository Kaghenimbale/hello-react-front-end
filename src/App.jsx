import './App.css';
import Greeting from './components/Greeting';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
