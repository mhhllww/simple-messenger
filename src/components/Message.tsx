import { MessageEntity } from '../types/MessageEntity';

import clsx from 'clsx';

const Message = ({ textMessage, senderName }: MessageEntity) => {
  return (
    <div
      className={clsx(
        'text-white rounded-2xl p-[10px] break-normal',
        `${senderName !== 'You' ? 'bg-gray-800 text-left' : 'bg-green-500 text-right'}`,
      )}>
      {textMessage}
    </div>
  );
};

export default Message;
