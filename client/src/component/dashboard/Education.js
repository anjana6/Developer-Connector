import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Header,Table,Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {deleteEducation} from '../../action/profileAction';

const Education = ({education,deleteEducation}) => {

    // if(experience.length){
    //     experience.map(exp => console.log(exp.title))
    // }
    //  experience.map(exp => console.log(exp.title));
    

    const educations = education.map(edu => 
        <Table.Row key={edu._id}>
            <Table.Cell >{edu.school}</Table.Cell>
            <Table.Cell>{edu.degree}</Table.Cell>
            <Table.Cell >
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {edu.to === null? ('Now'):(<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}
            </Table.Cell>
            <Table.Cell ><Button color='red' onClick={() => deleteEducation(edu._id)}>Delete</Button></Table.Cell>
            
        </Table.Row>);

    return (
        <Fragment>
            <Header as="h2">Education Credentials</Header>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>School</Table.HeaderCell>
                        <Table.HeaderCell>Degree</Table.HeaderCell>
                        <Table.HeaderCell>Years</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{educations}</Table.Body>
            </Table>
        </Fragment>
    )
}

export default connect(null,{deleteEducation})(Education);
