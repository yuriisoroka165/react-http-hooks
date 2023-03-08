import { useState, useEffect } from "react";
import PokemonErrorView from "./ErrorView";
import PokemonDataView from "./DataView";
import PokemonPendingView from "./PendingView";
import pokemonAPI from "../../services/pokemon-fetch-api";

const Status = {
    IDLE: "idle",
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

export default function PokemonInfo({pokemonName}) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if (!pokemonName) {
            return; //при першому рендері не робити fetch
        }

        setStatus(Status.PENDING);

        pokemonAPI
                .fetchPokemon(pokemonName)
            .then(pokemon => {
                setPokemon(pokemon);
                setStatus(Status.RESOLVED);
                })
            .catch(error => {
                setError(error);
                setStatus(Status.REJECTED);
                });
    }, [pokemonName])

    
        // патерн машина станів воно називається (state machine)
        if (status === Status.IDLE) {
            return <div>Enter pokemon name.</div>;
        }

        if (status === Status.PENDING) {
            return <PokemonPendingView pokemonName={pokemonName} />;
        }

        if (status === Status.REJECTED) {
            return <PokemonErrorView message={error.message} />;
        }

        if (status === Status.RESOLVED) {
            return <PokemonDataView pokemon={pokemon} />;
        }
    }
