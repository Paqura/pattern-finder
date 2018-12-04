import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {compose, withState, withHandlers} from 'recompose';

type Props = {
	count  : () => (evt: MouseEvent) => void;
	counter: number;
};

const IndexRoute: React.SFC<Props> = (props) => {
	return (
		<div>
			{props.counter}
			<button onClick={props.count}>Click</button>
		</div>
	);
};

const Echanced = compose(
	withState('counter', 'changeCounter', 0),

	withHandlers<{changeCounter: Function}, {}>({
		count: props => () => props.changeCounter((counter: number) => counter + 1),
	}),
)(IndexRoute);

const Root = () => {
	return(
		<Switch>
			<Route component={Echanced} />
		</Switch>
	);
};

export default Root;
