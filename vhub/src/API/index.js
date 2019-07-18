import axios from 'axios';

export const DEFAULT_CONFIG = {
    baseURL: "http://10.27.12.236:8080/api/",    withCredentials: true


const API = axios.create(DEFAULT_CONFIG);

export class Repository {
    url;
    constructor(url) {
        this.url = url;
    }

    getData({data, status, statusText}) {
        return (status >= 200 && status < 300) ? data : `${status}: ${statusText}`;
    }

    getId(idObject, requestId, required=true) {
        let id = requestId;
        const isIdObject = required ? idObject.id || idObject.id === 0
            : (idObject && idObject.id) || (idObject && idObject.id === 0);
        if (isIdObject) {
            id = idObject.id;
        } else if (!required) {
            id = idObject
        }
        return id;
    }

    async post(data) {
        try {
            const response = await API.post(this.url, {
                data
            });
            return this.getData(response)
        } catch (e) {
            console.error(e);
        }
    }

    async get(data) {
        const id = this.getId(data, undefined, false);
        const request = (id || id === 0) ? `${this.url}/${id}` : this.url
        try {
            const response = await API.get(request);
            return this.getData(response);
        } catch (e) {
            console.error(e);
        }
    }

    async patch(data, dataId) {
        const id = this.getId(data, dataId)
        try {
            const response = await API.patch(`${this.url}/${id}`, {
                data
            });
            return this.getData(response);
        } catch (e) {
            console.error(e);
        }
    }

    async delete(data) {
        const id = this.getId(data);
        try {
            const response = await API.delete(`${this.url}/${id}`);
            return this.getData(response);
        } catch (e) {
            console.error(e);
        }
    }
}

export default API;