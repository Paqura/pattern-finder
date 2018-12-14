import * as React from 'react';

const Icon = (props: {
	imagePath: string;
	alt: string;
}) => {
	return(
		<div>
			<img
				src={`${props.imagePath}`}
				alt={`${props.alt}`}
			/>
		</div>
	);
};

export default Icon;
