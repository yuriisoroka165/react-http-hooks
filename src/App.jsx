import { useState } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./components/Pokemon/From";
import PokemonInfo from "./components/Pokemon/Info";
import Counter from "./components/Pokemon/Counter";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
    const [pokemonName, setPokemonName] = useState(null);

    const handleFormSubmit = pokemonName => {
        setPokemonName(pokemonName);
    }

    return (
        <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
            <Counter />
            <PokemonForm onSubmit={handleFormSubmit} />
            <PokemonInfo pokemonName={pokemonName} />
            <ToastContainer autoClose={3000} />
        </div>
    );
    
}