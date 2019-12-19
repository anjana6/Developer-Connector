import React,{useState} from 'react'
import {withRouter} from 'react-router-dom';  
import {Header,Form,Checkbox,Button} from 'semantic-ui-react';
import { addExperience } from '../../action/profileAction';
import { connect } from 'react-redux';
const AddExperience = ({addExperience,history}) => {
    const [formData,setFormData] = useState({
        company: '',
        title:'',
        location:'',
        from:'',
        to:'',
        current:false,
        description:'', 
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {company,title,location,from,to,current,description} = formData;

    const onChange = e => setFormData({...formData,[e.target.name] : e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        addExperience(formData,history)
    }
   
    return (
        <div className='ui container'>
      <Header as='h1' color='teal'>
        Add An Experience
      </Header>
      <Header as='h1' color='blue'>
        <i className='fa fa-code-branch' />
        Add any developer/programing position that you have had in the post
      </Header>
      <small>* = required field</small>
      <Form  onSubmit={onSubmit}>
      <Form.Field>
        <input 
            name="title" 
            placeholder='* job Title'
            value={title}
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
        <input 
            name="company" 
            placeholder='* Company'
            value={company}
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
          <Header as='h4'>From Date</Header>
        <input 
            name="from" 
            type='date'
            value={from}  
            onChange={onChange}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.Field>
      <Checkbox label='Current Job' name='current' value={current }  onChange={() => {
          setFormData({...formData,current: !current} );
          toggleDisabled(!toDateDisabled);
      }}/>
      </Form.Field>
      <Form.Field>
          <Header as='h4'>to Date</Header>
        <input 
            name="to" 
            type='date'
            value={to}
            onChange={onChange}
            disabled = {toDateDisabled? 'disabled': ''}
        />
        <small>Give us an idea of where you are at in your career</small>
      </Form.Field>
      <Form.TextArea  placeholder='Job Description' name='description' value={description} onChange={onChange} />
      
        <Button type='submit' className='ui button teal'>
          Submit
        </Button>
      </Form>
    </div>
    )
}

export default connect(null,{addExperience})(withRouter(AddExperience));
