export {apiUrl,  type}  from './constant';
const resolveQueryParams = (params) => {
    return params ? Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&'):'';
}

export async function api(url, type, params, body = null){
        url = url + resolveQueryParams(params);
        return fetch(url).then(response => response.json());
}