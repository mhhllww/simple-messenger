type RoundedButtonProps = {
  text: string,
};

const RoundedButton = ({ text }: RoundedButtonProps) => {
  return (
    <button
      className={'bg-white text-green-700 border border-green-500 border-2 rounded-xl p-[10px_50px] hover:bg-green-50 transition duration-100'}>
      {text}
    </button>
  );
};

export default RoundedButton;