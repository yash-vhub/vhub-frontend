import {connect} from 'react-redux';
import ResourceForm from './resourceForm';
import {addNewSkill} from '../../action-creators/request';

function mapStateToProps(state, ownProps){
    console.log(state)
    let {compensation, experience, index, number, skills} = state.request.requestedResources[ownProps.id]
    return{
        compensation,
        experience,
        index,
        number,
        skills
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        addNewSkill: (newSkill) => {
            console.log(newSkill)
            dispatch(addNewSkill(newSkill))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm);