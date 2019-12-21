import React from 'react';
import Moment from 'react-moment';
import { Header,Card } from 'semantic-ui-react';

const ProfileExperience = ({experience:{company,title,location,current,to,from,description}}) => {
    return (
        
        <Card.Content>
            <Card.Header>{company}</Card.Header>
            <Card.Description>
            <Moment format='YYYY/MM/DD'>{from}</Moment>-{' '}{!to? 'Now': <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </Card.Description>
            <Card.Meta><strong>Position:</strong>{title}</Card.Meta>
            <Card.Meta><strong>Description:</strong>{description}</Card.Meta>
        </Card.Content>
    )
}


export default ProfileExperience;
