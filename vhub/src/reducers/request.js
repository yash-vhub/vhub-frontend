import {ADD_NEW_RESOURCE_REQUEST, ADD_NEW_SKILL} from "../action-creators/actions";

function blankState(){
    return {
        interviewer: '',
        approver: '',
        jobId: '',
        businessCase: '',
        clientName: '',
        team: '',
        manager: '',
        locationPref: '',
        comments: [],
        requestedResources: []
    }
}

function addNewResource(state) {
    console.log('reducer', state)
    const resourceRequestDefaultObject = {
        index: state.requestedResources.length,
        number: 0,
        compensation: '',
        experience: 0,
        skills: []
    }
    state.requestedResources.push(resourceRequestDefaultObject)
    return{
        ...state
    }
}

function addNewSkill(state, action) {
    console.log(action)
    state.requestedResources.map((requestedResource) => {
        if(requestedResource.key === action.key){
            requestedResource.skills.push(action.newSkill)
            return{
                ...state
            }
        }
        return{
            ...state
        }
    })
    return {
        ...state
    }
}

export default function (state = blankState(), action) {
    const actionHandlers = {
        [ADD_NEW_RESOURCE_REQUEST]: addNewResource,
        [ADD_NEW_SKILL]:addNewSkill
    };

    const reducer = actionHandlers[action.type];

    return reducer ?
        reducer(state, action) :
        state;
}