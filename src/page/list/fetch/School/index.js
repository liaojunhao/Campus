import {get} from '../index';

export function getSchool(city){
    return get(`/api/map?city=${city}`);
}
