import {connect} from 'react-redux';
import approveRequest from './approve-request';

function mapStateToProps(state,ownProps){
    // const interviewers = [
    //     {key:'1', text:'Seymore Butts', value:'Seymore Butts'},
    //     {key:'2', text:'Gene Vagine', value:'Gene Vagine'},
    //     {key:'3', text:'Rick Sanchez', value:'Rick Sanchez'}
    // ]
    // const approvers = [
    //     {key:'1', text:'Seymore Butts', value:'Seymore Butts'},
    //     {key:'2', text:'Gene Vagine', value:'Gene Vagine'},
    //     {key:'3', text:'Rick Sanchez', value:'Rick Sanchez'}
    // ]
    const request = state.requestLists.find(({id}) => {
        return id === Number(ownProps.match.params.id)
    })
    return{
        request: state.request
    }
    
}


export default connect(mapStateToProps)(approveRequest);