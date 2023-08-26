import { ReactNode } from "react";
import PokemonProvider from "./pokemonContex/pokemonContex";
interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <PokemonProvider>
        {children}
    </PokemonProvider>
  );
}