import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

function RequestList(props) {
    useEffect (() => {
        props.requestListData()
    });

    const object = props.requestLists.map((requestList) => {
        return (
            <Table.Row key={requestList.id}>
                <Table.Cell>
                    <Link to={`/request/${requestList.id}`}>{requestList.requestID}</Link>
                </Table.Cell>
                <Table.Cell>
                    {requestList.jobPostingID}
                </Table.Cell>
                <Table.Cell>
                    {requestList.requestedData}
                </Table.Cell>
                <Table.Cell>
                    {requestList.requestor}
                </Table.Cell>
                <Table.Cell>
                    {requestList.numberOfResources}
                </Table.Cell>
                <Table.Cell>
                    {requestList.client}
                </Table.Cell>
                <Table.Cell>
                    {requestList.manager}
                </Table.Cell>
                <Table.Cell>
                    <Link to={`/confirm/${requestList.requestID}`}>{requestList.status}</Link>
                </Table.Cell>
            </Table.Row>
        )
    });

    return(
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>RequestID</Table.HeaderCell>
                    <Table.HeaderCell>Job Posting ID</Table.HeaderCell>
                    <Table.HeaderCell>Requested Date</Table.HeaderCell>
                    <Table.HeaderCell>Requestor</Table.HeaderCell>
                    <Table.HeaderCell>Number of Resources</Table.HeaderCell>
                    <Table.HeaderCell>Client</Table.HeaderCell>
                    <Table.HeaderCell>Manager</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {object}
            </Table.Body>
        </Table>
    );
}

export default RequestList;