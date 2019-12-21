import React from 'react'
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const ProfileTop = ({profile:{status,company,location,website,social,user:{name,avatar}}}) => {
    return (
        <div className="ui card">
        <img src={avatar} className="ui image" />
        <div className="content">
        <div className="header">{name}</div>
    <div className="meta">{status} {company && <span>at {company}</span>}</div>
    <div className="description">{location && <span>{location}</span>}</div>
        </div>
        <div className="extra content">
            {website && ( 
                <Link to={website} target='_blank'><Icon name='globe'/></Link>
            )}
            {social && social.twitter && (
                <Link to={social.twitter} target='_blank'><Icon name='twitter'/></Link>
            )}
             {social && social.facebook && (
                <Link to={social.facebook} target='_blank'><Icon name='facebook official'/></Link>
            )}
            {social && social.youtube && (
                <Link to={social.youtube} target='_blank'><Icon name='youtube'/></Link>
            )}
            {social && social.instagram && (
                <Link to={social.instagram} target='_blank'><Icon name='instagram'/></Link>
            )}
            {social && social.linkedin && (
                <Link to={social.linkedin} target='_blank'><Icon name='linkedin'/></Link>
            )}
        </div>
      </div>
    )
}

export default ProfileTop;
