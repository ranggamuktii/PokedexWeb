import { colours } from '../data/colours';
import './PokemonCard.css';

function PokemonCard({ name, types, image }) {
  return (
    <div className="pokemon-card flex flex-col items-center justify-center pb-8 m-2 bg-white border border-gray-200 rounded-[15px] shadow-[5px_5px_0_rgba(17,24,39,1)] dark:bg-gray-800 dark:border-gray-700">
      <img className="w-72 h-auto" src={image} alt={name} />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>

      {/* Badge types */}
      <div className="flex space-x-2 mt-3">
        {types.map((type, index) => (
          <span key={index} className="px-3 py-1 rounded-lg text-white font-semibold" style={{ backgroundColor: colours[type.toLowerCase()] }}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
