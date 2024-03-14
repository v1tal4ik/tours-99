const TourItem = ({ name, price, description }) => {
	return (
		<li>
			<p>name:{name}</p>
			<p>price:{price}$</p>

			{description && <p>description:{description}</p>}
		</li>
	);
};

export default TourItem;
