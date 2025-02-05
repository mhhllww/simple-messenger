import { MessageEntity } from '../types/MessageEntity';

import clsx from 'clsx';

const Message = ({ textMessage, senderName }: MessageEntity) => {
  return (
    <div
      className={clsx(
        'relative text-white rounded-2xl p-[10px] break-normal',
        `${senderName !== 'You' ? 'bg-gray-800 text-left' : 'bg-green-500 text-right'}`,
      )}>
      {textMessage}
      <span className={clsx(
        'text-[8px] absolute bg-gray-500 p-[2px] rounded-sm z-1 bottom-[-5px]',
        `${senderName === 'You' ? 'right-[0px]' : 'left-0'}`
        )}>{senderName}</span>
    </div>
  );
};

export default Message;
