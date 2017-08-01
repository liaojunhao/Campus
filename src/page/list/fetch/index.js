import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url, {Accept: 'application/json'}).then(response =>response.json())
}

export function post(url,data){
    return fetch(url,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response =>response.json())
}