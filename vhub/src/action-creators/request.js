import {ADD_NEW_RESOURCE_REQUEST, ADD_NEW_SKILL} from "./actions";

export function addNewResourceRequest() {
    return {
        type:ADD_NEW_RESOURCE_REQUEST,
    }
}
export function addNewSkill(newSkill, key){
    console.log(newSkill)
    return {
        type:ADD_NEW_SKILL,
        newSkill,
        key
    }
}