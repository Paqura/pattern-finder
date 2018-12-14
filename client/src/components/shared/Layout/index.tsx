import * as React from 'react';
import Header from 'Components/shared/Header/index';
import Container from 'Components/shared/Container/index';

const Layout = (props: any) => {
	return(
		<>
			<Header />
			<Container children={props.children} />
		</>
	);
};

export default Layout;
