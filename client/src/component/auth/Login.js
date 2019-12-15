import React,{useState} from 'react';
import { Button,Header,Form } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../action/authAction';


const Login = ({login,isAuthenticated}) => {
    const [formData,setFormData] = useState({name:'',email:'',password:'',password2: ''});

    const {email,password} = formData;

    const onChange = (e) =>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
            login({email,password});
    };

    if(isAuthenticated){
        return <Redirect to="/dashboard"/>
    }

    return (
        <div className="ui container">
            <Header as='h1' color='teal'>Sing In</Header> 
            <Header as='h1' color='blue'><i className="fa fa-user"/>Sing into Your  Account</Header>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input 
                        placeholder="Email Address"
                        type="email"
                        name="email" 
                        value={email}
                        onChange={onChange} 
                        required 
                    />
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
                <Button type='submit' className="ui button teal ">Submit</Button>
            </Form>
            <p >All ready have an account?<Link to="/register">Sing Up</Link></p>
        </div>
    )
};

const mapStateToProp = (state) =>({
    isAuthenticated : state.auth.isAuthenticated
});



export default connect(mapStateToProp,{login})(Login);
 