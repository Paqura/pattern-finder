import {addDecorator, configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {withKnobs} from '@storybook/addon-knobs';

addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../src', true, /.stories.tsx?$/);

function loadStories() {	
	req.keys().forEach(file => req(file));
};

configure(loadStories, module);
