import { useState } from "react";

export const useTypeColor = () => {
    const [color, setColor] = useState();
    
    const getColor = (type) => {
        switch (type) {
          case "normal":
            setColor({backgroundColor: '#DDCCAA'})
            break;
          case "fighting":
            setColor({backgroundColor: '#F43D3D'})
            break;
          case "flying":
            setColor({backgroundColor: '#82ABE9'})
            break;
          case "poison":
            setColor({backgroundColor: '#AA4CF4'})
            break;
          case "ground":
            setColor({backgroundColor: '#DA8B43'})
            break;
          case "rock":
            setColor({backgroundColor: '#B9B278'})
            break;
          case "bug":
            setColor({backgroundColor: '#BFE373'})
            break;
          case "ghost":
            setColor({backgroundColor: '#6A61D4'})
            break;
          case "steel":
            setColor({backgroundColor: '#616C77'})
            break;
          case "fire":
            setColor({backgroundColor: '#FFA95A'})
            break;
          case "water":
            setColor({backgroundColor: '#4BA6E9'})
            break;
          case "grass":
            setColor({backgroundColor: '#7DCA71'})
            break;
          case "electric":
            setColor({backgroundColor: '#F6CF43'})
            break;
          case "psychic":
            setColor({backgroundColor: '#E585B9'})
            break;
          case "ice":
            setColor({backgroundColor: '#70DDDD'})
            break;
          case "dragon":
            setColor({backgroundColor: '#F9D43C'})
            break;
          case "dark":
            setColor({backgroundColor: '#2A2E31'})
            break;
          case "fairy":
            setColor({backgroundColor: '#FF94FB'})
            break;
          case "unknown":
            setColor({backgroundColor: '#ACACAC'})
            break;
          case "shadow":
            setColor({backgroundColor: '#616C77'})
            break;
      
          default:
            break;
        }
      };

      return [color, getColor];
}