import React, { Fragment } from 'react'
import { Header,Segment,Divider,Icon,List } from 'semantic-ui-react'

const ProfileAbout = ({profile:{bio,skills,user:{name}}}) => {
    return (
        <div>
            
            {bio && (
                <Fragment>
                    <Header as="h1">{name.trim().split(' ')[0]}s Bio</Header>
                    <p>{bio}</p>
                </Fragment>
            )}
            <Segment>
                <Header as='h2' floated='right'>Skill Set</Header>

    <Divider clearing />
     
    <List horizontal>
                
        {skills.map((skill,index) =>(
            
            <List.Item key={index}>
            <List.Content>
            <List.Header><Icon name='check'/> {skill}</List.Header>
            </List.Content>
            </List.Item>
        ))}
        
    </List>
  </Segment>
            
        </div>
    )
} 

export default ProfileAbout;
