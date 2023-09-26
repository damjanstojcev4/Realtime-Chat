import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='2dd87f95-bac5-49d1-a0b8-999c93bceae2'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}} />
    </div>)
}

export default ChatsPage;