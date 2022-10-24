import SearchContextProvider from './contexts/SearchContext';
import Home from './pages/Home/Home';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <GlobalStyle />
        <Home />
      </SearchContextProvider>
    </div>
  );
}
