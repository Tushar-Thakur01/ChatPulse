import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Home = ({socket}) => {
    const navigate = useNavigate();
    
    const [userName,setusername] = useState('');
    const handlesubmit = (e)=>{
        e.preventDefault();

        localStorage.setItem('userName', userName);
        socket.emit('newUser',{ userName, socketID:socket.id});
        navigate('/chat');
    };
    return(
        <form className='home__container' onSubmit = {handlesubmit}>
            <h2 className='home__header'>Sing in to Open Chat</h2>
            <label htmlFor="username">username</label>
            <input 
            type='text'
            minLength={6}
            name='username'
            id='username'
            className='username__input'
            value={userName}
            onChange={(e)=>setusername(e.target.value)}
            />
            <button className='home__cta'>SIGN IN</button>
        </form>
    )
}
export default Home;