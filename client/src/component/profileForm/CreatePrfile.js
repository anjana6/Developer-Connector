import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Header,Form,Button } from 'semantic-ui-react';  



const CreatePrfile = () => {

   
    const [formData,setFormData] = useState({
        company: '',
        website: '',
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


    const {company,website,status,skills,githubusername,bio,twitter,facebook,linkedin,youtube,instagram} = FormData;
    return (
        <div className="ui container">
            <Header as='h1' color='teal'>Create Your Profile</Header> 
            <Header as='h1' color='blue'><i className="fa fa-user"/>Let's get some information to make your profile stand out</Header>
            <small>* = required field</small>
            <Form >
                <Form.Field  control='select'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Field>
                    <small>Give us an idea of where you are at in your career</small>
                <Form.Field>
                    <input 
                        placeholder='Company' 
                        name="Company" 
                        value={company}
                        // onChange={onChange} 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        placeholder="Website"
                        name="Website" 
                        value={website}
                        // onChange={onChange} 
                    />
                    <small>This site uses Gravater so if you want a profile image, use a Gravatar email.</small>
                </Form.Field>
                {/* <Form.Field>
                    <input
                        placeholder="Password" 
                        type="password"
                        name="password" 
                        value={password}
                        // onChange={onChange}
                    />
                </Form.Field> */}
                {/* <Form.Field>
                    <input 
                         placeholder="Conform Password" 
                         type="password"
                         name="password2" 
                         value={password2}
                        //  onChange={onChange}
                    />
                </Form.Field> */}
                <Button type='submit' className="ui button teal ">Submit</Button>
            </Form>
            </div>
    )
}

export default CreatePrfile;
