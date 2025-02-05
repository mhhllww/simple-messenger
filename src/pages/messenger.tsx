import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import UserContext from '../contexts/userContext';
import { deleteNotification, receiveNotification, sendMessage } from '../services/greenApi';
import Message from '../components/Message';
import AutoResizeTextarea from '../components/MessageInput';
import { MessageEntity } from '../types/MessageEntity';
import lastMessageScroll from '../hooks/scroll-to-last-msg';

const Messenger = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [chat, setChat] = useState<MessageEntity[]>([]);

  const [phone, setPhone] = useState();
  // @ts-ignore
  const { userData } = useContext(UserContext);

  const handleSend = async () => {
    try {
      // @ts-ignore
      const chatId = `${phone.phone}@c.us`;
      await sendMessage(
        { chatId, message },
        userData.idInstance,
        userData.apiTokenInstance,
      );

      setChat((prevChat) => [
        { textMessage: message, senderName: 'You' },
        ...prevChat,
      ]);

      setMessage('');
    } catch (e) {
      console.error(e);
    }
  };

  const notifications = async () => {
    try {
      const data = await receiveNotification(
        userData.idInstance,
        userData.apiTokenInstance,
      );

      if (data && data.body.typeWebhook === 'incomingMessageReceived') {
        const text = data.body.messageData?.textMessageData?.textMessage;
        const sender = data.body.senderData?.senderName;

        setChat((prevChat) => [
          { textMessage: text, sender: sender },
          ...prevChat,
        ]);
      }

      await deleteNotification(
        data.receiptId,
        userData.idInstance,
        userData.apiTokenInstance,
      );
    } catch (e) {
      console.error(e);
    }
  };

  // @ts-ignore
  const onSubmit = (data) => {
    setPhone(data);
    setChat([]);
  };

  useEffect(() => {
    if (userData === null) navigate('/');

    const interval = setInterval(notifications, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    lastMessageScroll('last-mess');
  }, [chat]);

  return (
    <main
      className={
        'w-[100vw] h-[100vh] flex items-center justify-center flex-col bg-green-200 gap-[20px]'
      }>
      {phone && (
        // @ts-ignore
        <h1 className={'text-[20px] text-green-700'}>Contact: {phone.phone}</h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={'bg-white text-green-900 p-[10px] rounded-xl border border-green-500 border-2'}
          {...register('phone', {
            required: true,
            pattern: /^7\d{10}$/,
            maxLength: 11,
          })}
          placeholder={'Enter phone'}
          type="number" />
        <button
          className={'bg-white text-green-700 border border-green-500 border-2 rounded-xl p-[10px_50px] hover:bg-green-50 transition duration-100'}>Add
          chat
        </button>
      </form>

      <section className={'w-[500px]'}>
        <div className={'flex flex-col gap-[5px] overflow-auto h-[500px]'}>
          {chat &&
            [...chat]
              .reverse()
              .map((msg, i) => (
                <Message
                  key={i}
                  textMessage={msg.textMessage}
                  senderName={msg.senderName}
                />
              ))}
          <div className="last-mess"></div>
        </div>
        <div className={'w-full flex flex-row items-end justify-end gap-2'}>
          <AutoResizeTextarea
            placeholder={'Message'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className={
              'bg-white text-green-700 border border-green-500 border-2 rounded-full hover:bg-green-50 transition duration-100 w-[40px] h-[40px]'
            }>
            Send
          </button>
        </div>
      </section>
    </main>
  );
};

export default Messenger;
