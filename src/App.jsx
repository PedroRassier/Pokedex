import GetPokemonContextProvider from "./contexts/GetPokemonContext";
import SearchContextProvider from "./contexts/SearchContext";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GetPokemonContextProvider>
        <SearchContextProvider>
          <GlobalStyle />
          <Home />
        </SearchContextProvider>
      </GetPokemonContextProvider>
    </div>
  );
}
