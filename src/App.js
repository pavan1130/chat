import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginFrom from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>
    return (
        <ChatEngine
            height="100vh"
            projectID="5f25cea1-97b1-4da6-88ea-d4f29f6fd0ac"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;