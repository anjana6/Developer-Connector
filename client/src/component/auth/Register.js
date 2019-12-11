import React,{useState} from 'react';

const Register = () => {
    const [formData,setFormData] = useState({name:'',email:'',password:'',password2: ''});

    const {name,email,password,password2} = formData;

    const onChange = (e) =>{
        setFormData
    }
    return (
        <div className="ui container">
            <h1 className="ui teal header">Sing Up</h1>
            <h3 className="ui blue text"><i className="fa fa-user"/>Create Your Account</h3>
            <form className="ui form">
                <div className="field">
                    <input  
                        type="text"
                        name="name" 
                        placeholder="Name" 
                        value={name}
                        required 
                    />
                </div>
                <div className="field">
                    <input
                        type="email"
                        name="email" 
                        placeholder="Email Address"
                        value={email} 
                        required 
                    />
                    <small>This site uses Gravatar so if you want a profile image,use a Gravatar email</small>
                </div>
                <div className="field">
                    <input
                        type="password"
                        name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                     />
                </div>
                <div className="field">
                    <input
                        type="password"
                        name="password2"
                        placeholder="confirm password"
                        value={password2}
                     />
                </div>
                <button type="submit" className="ui teal button">Submit</button>
            </form>
        </div>
    )
}

export default Register
