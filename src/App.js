import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import './App.css';

const App = () =>{
    return(
        <ChatEngine
            height = "100vh"
            projectID="c2fa4ceb-8750-4938-84da-2adee1ae086d"
            userName="simran"
            userSecret="simran@123"
            renderChatFeed={(chatAppsProps)=> <ChatFeed {...chatAppsProps}/>}
        />
    )
}

export default App;