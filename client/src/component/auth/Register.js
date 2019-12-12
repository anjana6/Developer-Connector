import React,{useState} from 'react';
import { Button,Header,Form } from 'semantic-ui-react';

const Register = () => {
    const [formData,setFormData] = useState({name:'',email:'',password:'',password2: ''});

    const {name,email,password,password2} = formData;

    const onChange = (e) =>{
        
    }
    return (
        <div className="ui container">
            <Header as='h1' color='teal'>Sing Up</Header> 
            <Header as='h1' color='blue'><i className="fa fa-user"/>Create Your Account</Header>
            <Form>
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
        </div>
    )
}

export default Register
