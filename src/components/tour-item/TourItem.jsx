import clsx from 'clsx';

const TourItem = ({ name, price, description, isHot }) => {
	return (
		<li
			className={clsx('tour-item', 'fvfv', {
				'with-border': isHot,
			})}>
			<p>name:{name}</p>
			<p>price:{price}$</p>
			{description && <p>description:{description}</p>}
		</li>
	);
};

export default TourItem;
