import {get} from '../index';

export function getList(city){
    return get(`/api/list?city=${city}`);
}
