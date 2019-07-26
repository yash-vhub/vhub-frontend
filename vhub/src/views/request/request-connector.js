import {connect} from 'react-redux';
import request from './request';
import {addNewResourceRequest} from '../../action-creators/request';

function mapStateToProps(state){
    const interviewers = [
        {key:'1', text:'Seymore Butts', value:'Seymore Butts'},
        {key:'2', text:'Gene Vagine', value:'Gene Vagine'},
        {key:'3', text:'Rick Sanchez', value:'Rick Sanchez'}
    ]
    const approvers = [
        {key:'1', text:'Seymore Butts', value:'Seymore Butts'},
        {key:'2', text:'Gene Vagine', value:'Gene Vagine'},
        {key:'3', text:'Rick Sanchez', value:'Rick Sanchez'}
    ]
    return{
        interviewers,
        approvers,
        request: state.request
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        addResourceRequest: () => {
            dispatch(addNewResourceRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(request);