import React,{useState} from 'react';
import { Button,Header,Form } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../action/alertAction';
import {connect} from 'react-redux';
import {register} from '../../action/authAction'

const Register = ({setAlert,register,isAuthenticated}) => {
    const [formData,setFormData] = useState({name:'',email:'',password:'',password2: ''});

    const {name,email,password,password2} = formData;

    const onChange = (e) =>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Password do not match','danger');
        }else{
            register({name,email,password})
        }
    };

    if(isAuthenticated){
        return <Redirect to='/dashboard'/>
    }
    return (
        <div className="ui container">
            <Header as='h1' color='teal'>Sing Up</Header> 
            <Header as='h1' color='blue'><i className="fa fa-user"/>Create Your Account</Header>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input 
                        placeholder='Name' 
                        name="name" 
                        value={name}
                        onChange={onChange} 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        placeholder="Email Address"
                        type="email"
                        name="email" 
                        value={email}
                        onChange={onChange} 
                    />
                    <small>This site uses Gravater so if you want a profile image, use a Gravatar email.</small>
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="Password" 
                        type="password"
                        name="password" 
                        value={password}
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                         placeholder="Conform Password" 
                         type="password"
                         name="password2" 
                         value={password2}
                         onChange={onChange}
                    />
                </Form.Field>
                <Button type='submit' className="ui button teal ">Submit</Button>
            </Form>
            <p >All ready have an account?<Link to="/login">Sing In</Link></p>
        </div>
    )
}

const mapStateToProp = (state) =>({
    isAuthenticated : state.auth.isAuthenticated
});


export default connect(mapStateToProp,{setAlert,register})(Register);
