import {MultiChatSocaket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '657292e7-ad62-4f4c-a5b8-4eb0a72b8450', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
        <><MultiChatSocaket {...chatProps} /><MultiChatWindow {...chatProps} style={{ height: '100vh' }} /></> 
        </div>
    )
}



export default ChatsPage