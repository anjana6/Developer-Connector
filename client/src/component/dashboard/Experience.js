import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Header,Table,Button } from 'semantic-ui-react';

const Experience = ({experience}) => {

    // if(experience.length){
    //     experience.map(exp => console.log(exp.title))
    // }
    //  experience.map(exp => console.log(exp.title));
    

    const experiences = experience.map(exp => 
        <Table.Row key={exp._id}>
            <Table.Cell >{exp.company}</Table.Cell>
            <Table.Cell>{exp.title}</Table.Cell>
            <Table.Cell >
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {exp.to === null? ('Now'):(<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)}
            </Table.Cell>
            <Table.Cell ><Button color='red'>Delete</Button></Table.Cell>
            
        </Table.Row>);

    return (
        <Fragment>
            <Header as="h2">Expericence Credentials</Header>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Years</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{experiences}</Table.Body>
            </Table>
        </Fragment>
    )
}

export default Experience;
