import React from 'react';
import s from './Dialogs.module.css';
import Person from './Person/Person';
import Message from './Message/Message';
import {updateNewMessageText, addNewMessage} from '../../redux/actions'

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addNewMessage());
    }

    let updateText = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageText(text));
    }

    const dialogsElements = props.personData.person
    .map(({id, name}) => <Person name={name} id={id}/>)

    const messageItem = props.personData.personMessage
    .map(({message}) => (<Message text={message}/>))

    return (
        <div className={s.dialogsall}>
            <div className={s.dialogs}>
                <h3 className={s.h3}>Dialogs</h3>
                {dialogsElements}
            </div>
            <div className={s.dialogarea}>
                <div className={s.messages}>
                   {messageItem}
                </div>
                <div className={s.textarea}>
                    <textarea
                    placeholder='Write your message...'
                    value={props.personData.textValue}
                    onChange={updateText} 
                    className={s.messagetext} 
                    ref={newMessage}/>
                    <button
                    className={s.button}
                    onClick={addMessage}>
                        SEND
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;