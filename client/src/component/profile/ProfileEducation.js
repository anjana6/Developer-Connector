import React from 'react';
import Moment from 'react-moment';
import { Header,Card } from 'semantic-ui-react';

const ProfileEducation = ({education:{school,degree,location,fieldofstudy,current,to,from,description}}) => {
    return (
        <Card>
        <Card.Content>
            <Card.Header>{school}</Card.Header>
            <Card.Description>
            <Moment format='YYYY/MM/DD'>{from}</Moment>-{' '}{!to? 'Now': <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </Card.Description>
            <Card.Meta><strong>Degree:</strong>{degree}</Card.Meta>
            <Card.Meta><strong>Field of Study:</strong>{fieldofstudy}</Card.Meta>
            <Card.Meta><strong>Description:</strong>{description}</Card.Meta>
        </Card.Content>
        </Card>
    )
}


export default ProfileEducation;
