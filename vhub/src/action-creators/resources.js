import Resources from "../API/resources";
import { REQUEST_RESOURCES, RECEIVE_RESOURCES, INVALIDATE_RESOURCES } from "./actions";


export function requestResources() {
    return {
        type: REQUEST_RESOURCES
    }
}

export function receiveResources(resources) {
    return {
        type: RECEIVE_RESOURCES,
        resources
    }
}

export function invalidateResources() {
    return {
        type: INVALIDATE_RESOURCES
    }
}

export function fetchResources(name) {
    return async function(dispatch) {
        try {
            dispatch(requestResources())
            const response = name ? await Resources.getByName(name) : await Resources.get();
            dispatch(receiveResources(response));
        } catch (e) {
            dispatch(invalidateResources())
            console.error(e);
        }
    }
}