import * as React from 'react';
import {SearchIcon} from 'Components/shared/Vectors/index';
import {SearchField, FormSection} from './style';

const Search = (props: {

}) => <FormSection>
	<SearchField
		type="text"
		placeholder="Find a beautiful pattern"
	/>
	<SearchIcon
		width={26}
		height={26}
	/>
</FormSection>;

export default Search;
