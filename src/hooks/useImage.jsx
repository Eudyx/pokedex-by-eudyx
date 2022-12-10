import { useState } from "react"

export const useImage = () => {
    const [img, setImg] = useState('');

    const setImage = (pokemon) => {
        switch (pokemon.sprites.other["official-artwork"].front_default){
          case null:
            pokemon.sprites.front_default == null ? setImg('./question.svg') : setImg(pokemon.sprites.front_default);
            break;
          default:
            setImg(pokemon.sprites.other["official-artwork"].front_default);
            break;
        }
    }
    
    return [img, setImage];
}