import * as React from 'react';
import Header from 'Components/shared/Header/index';

const Layout = (props: any) => {
	return(
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Layout;
