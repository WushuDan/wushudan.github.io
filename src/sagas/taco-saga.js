import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from '../dux/taco-dux'
import Model from '../models/taco-model'
import { taco as url } from '../constants/urls'

async function request () {
    const response = await fetch(url, { type: 'get' });
    const json = await response.json();

    return json;
}

export function * getTaco () {
    try {
        const json = yield call(request);
        const taco = new Model(json);

        yield put({ type: actions.getTacoSuccess.type, payload: taco });

    } catch (ex) {
        yield put ({ type: actions.getTacoError.type, payload: ex.message || ex });
    }
}

export function * getNewTaco () {
    yield takeLatest(actions.getTaco.type, getTaco);
}