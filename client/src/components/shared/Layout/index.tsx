import * as React from 'react';
import Header from '../Header';
import Container from '../Container';

const Layout = (props: any) => {
	return(
		<React.Fragment>
			<Header />
			<Container children={props.children} />
		</React.Fragment>
	);
};

export default Layout;
