import React from 'react';
import PropTypes from 'prop-types';
import {Form, Grid, Button} from 'semantic-ui-react';
import ResourceForm from './resourceForm-connector';

class RequestForm extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        const resources = this.props.request.requestedResources.map((resource)=>{
            return <ResourceForm key={resource.index} id={resource.index}/>
        })
        return(
            <Grid columns='16' centered>
                <Grid.Column width='10'>
                <Form>
                    <Form.Group widths='equal'>
                            <Form.Input fluid label='Requested By' placeholder='Requested By' readOnly/>
                            <Form.Input fluid label='Requested Date' placeholder='Requested Date' readOnly/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select fluid label='Interviewer' options={this.props.interviewers} placeholder='Select'/>
                        <Form.Select fluid label='Approvers' options={this.props.approvers} placeholder='Select'/>
                    </Form.Group>
                        <Form.TextArea label='Business Case' placeholder='Describe Business Case' rows='6'/>
                    <h4>Client Info</h4>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Client Name' placeholder='Client Name'/>
                        <Form.Input fluid label='Team' placeholder='Team'/>
                        <Form.Input fluid label='Manager' placeholder='Manager'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input fluid label='Location Preference' placeholder='Location'/>
                    </Form.Group>
                    <Button icon='add' label='Add Resource' onClick={this.props.addResourceRequest}/>
                    {resources}
                    <Form.Button>Submit</Form.Button>
                </Form>
                </Grid.Column>
            </Grid>
        );
    };
};

export default RequestForm;