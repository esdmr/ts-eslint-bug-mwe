import {answerToLife} from '../src/src-file.js';

const value = answerToLife();

if (value !== 42) {
	throw new Error('How?');
}
