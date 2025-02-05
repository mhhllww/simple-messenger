import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import UserContext from '../contexts/userContext';
import RoundedButton from '../components/RoundedButton';

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  // @ts-ignore
  const { setUserData } = useContext(UserContext);
  // @ts-ignore
  const onSubmit = (data) => {
    setUserData(data);

    navigate('/messenger');
  };

  return (
    <main
      className={
        'w-[100vw] h-[100vh] flex items-center justify-center bg-green-200'
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'w-1/2 h-2/3 flex flex-col justify-center items-center gap-[20px] bg-green-300 rounded-2xl border border-green-500 border-2'}
      >
        <h1 className={'text-green-800 text-2xl font-bold'}>Enter your idInstance and apiTokenInstance</h1>
        <input
          className={'bg-white text-green-900 p-[10px] rounded-xl border border-green-500 border-2'}
          {...register('idInstance', { required: true })}
          placeholder={'Enter ID Instance'}
          type="text"
        />

        <input
          className={'bg-white text-green-900 p-[10px] rounded-xl border border-green-500 border-2'}
          {...register('apiTokenInstance', { required: true })}
          placeholder={'Enter API Token'}
          type="text"
        />

        <RoundedButton text={'Submit'} />
      </form>
    </main>
  );
};

export default Registration;