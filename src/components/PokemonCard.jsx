import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { StarButton } from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const PokemonCard = ({ name, image, favorite, abilities, id }) => {
	const dispatch = useDispatch();
	const abilitiesUnion = abilities.map((elem) => elem.ability.name).join(', ');
	const handleOnFavorite = () => {
		dispatch(setFavorite({ pokemonId: id }));
	};
	return (
		<Card
			title={name}
			cover={<img src={image} alt={name} />}
			extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
		>
			<Meta description={abilitiesUnion} />
		</Card>
	);
};

export default PokemonCard;
