import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

const PokemonCard = ({ name, image, abilities }) => {
	const abilitiesUnion = abilities.map((elem) => elem.ability.name).join(', ');
	return (
		<Card title={name} cover={<img src={image} alt={name} />} extra={<StarOutlined />}>
			<Meta description={abilitiesUnion} />
		</Card>
	);
};

export default PokemonCard;
