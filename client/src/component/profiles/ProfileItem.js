import React from 'react'
import {Item,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const ProfileItem =({profile:{user:{_id,name,avatar},status,company,location,skills}}) => {

    return (
        <Item.Group>
        <Item>
          <Item.Image size='small' src={avatar} />
    
          <Item.Content>
                <Item.Header as='a'>{name}</Item.Header>
                <Item.Meta>{status} {company && <span>at {company}</span>}</Item.Meta>
                <Item.Meta> {location && <span> {location}</span>}</Item.Meta>
                <Link to={`/profile/${_id}`} className="ui button primary">View Profile</Link>
          </Item.Content>
          <Item.Content>
              {skills.slice(0,4).map((skill,index) => (
                <Item.Meta key={index}><Icon name='check' />{skill} </Item.Meta>
              ))}
          </Item.Content>
        </Item>
      </Item.Group>
    )
}

export default ProfileItem;
