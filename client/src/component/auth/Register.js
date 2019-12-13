import React,{useState} from 'react';
import { Button,Header,Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {setAlert} from '../../action/alertAction';
import {connect} from 'react-redux';
import axios from 'axios';

const Register = ({setAlert}) => {
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
            console.log('success');
            // console.log(formData);
            // const newUser ={name,email,password};
            // try {
            //     const config = {
            //         headers:{'Content-type':'application/json'}
            //     }
            //     const body = JSON.stringify(newUser);
            //     // console.log(body,config);
            //     const res = await axios.post('api/users',body,config);
            //    console.log(res.data);

            // } catch (error) {
            //     console.error(error.response.data);
            // }
        }
    };
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
                        required 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        placeholder="Email Address"
                        type="email"
                        name="email" 
                        value={email}
                        onChange={onChange} 
                        required 
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

export default connect(null,{setAlert})(Register);
