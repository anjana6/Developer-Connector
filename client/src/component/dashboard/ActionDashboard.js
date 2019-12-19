import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Icon} from 'semantic-ui-react';
const ActionDashboard = () => {
    return (
        <div>
             <Link to="/edit-profile" className="ui "><Button primary><Icon name='user circle' />Edit Profie</Button></Link>
             <Link to="/add-experience" className="ui "><Button primary><Icon name='black tie' />Add Experience</Button></Link>
             <Link to="/add-education" className="ui "><Button primary><Icon name='graduation cap' />Add Education</Button></Link>
            
        </div>
    )
}

export default ActionDashboard;
