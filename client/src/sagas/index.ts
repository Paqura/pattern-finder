import {all} from 'redux-saga/effects';
import {saga as  patternsSaga} from 'Ducks/patterns/index';

export const saga = function * () {
  yield all([
    patternsSaga(),
  ])
};