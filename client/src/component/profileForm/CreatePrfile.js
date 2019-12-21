import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';  
import { Header, Form, Button} from 'semantic-ui-react';
import {createProfile} from '../../action/profileAction';

const CreateProfile = ({createProfile,history}) => {

  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location:'',
    status: '',
    skills: '',
    githubusername: '',
    bio: '', 
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocilaInputs,toggleSocialInputs] = useState({display:false});

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    createProfile(formData,history)
  }
  return (
    <div className='ui container'>
      <Header as='h1' color='teal'>
        Create Your Profile
      </Header>
      <Header as='h1' color='blue'>
        <i className='fa fa-user' />
        Let's get some information to make your profile stand out
      </Header>
      <small>* = required field</small>
      <Form >
      <Form.Field  control='select' name='status' value={status} onChange={onChange}>
        <option value='0'>Select Professional Status</option>
        <option value='Developer'>Developer</option>
        <option value='Developer'>Developer</option>
        <option value='Developer'>Developer</option>
        <option value='Developer'>Developer</option>
        <option value='Developer'>Developer</option>
      </Form.Field>
      <Form.Field>
        <input 
            name="company" 
            placeholder='Company'
            value={company}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
        <input 
            name="website" 
            placeholder='Websit'
            value={website}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
        <input 
            name="location" 
            placeholder='Location'
            value={location}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
        <input 
            name="skills" 
            placeholder='* Skills'
            value={skills}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
        <input 
            name="githubusername" 
            placeholder='Githhub Username'
            value={githubusername}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.TextArea  placeholder='bio data' name='bio' value={bio} onChange={onChange} />
      <Button type='submit' className='ui button teal ' onClick={() => toggleSocialInputs({display:true})}>
         Add Social Network Links
      </Button>

      {displaySocilaInputs.display && (<Fragment>
        <Form.Field
            control='input'
            name='twitter'
            type='text'
            placeholder='twitter URL'
            value={twitter}
            onChange={onChange}
      />
      <Form.Field
            control='input'
            name='facebook'
            type='text'
            placeholder='facebook URL'
            value={facebook}
            onChange={onChange}
      />
      <Form.Field
            control='input'
            name='youtube'
            type='text'
            placeholder='youtube URL'
            value={youtube}
            onChange={onChange}
      />
      <Form.Field
            control='input'
            name='linkedin'
            type='text'
            placeholder='linkedin URL'
            value={linkedin}
            onChange={onChange}
      />
      <Form.Field
            control='input'
            name='instagram'
            type='text'
            placeholder='instagram URL'
            value={instagram}
            onChange={onChange}
      />
      {/* <Input iconPosition='left' placeholder='Email'>
      <Icon name='twitter square' color='teal' />
      <input />
    </Input> */}
        
     
      </Fragment>) }
        <Button type='submit' className='ui button teal' onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};


export default connect(null,{createProfile})(withRouter(CreateProfile));
