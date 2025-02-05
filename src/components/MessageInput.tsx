type AutoResizeTextareaProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
};

const AutoResizeTextarea = ({ value, onChange, placeholder }: AutoResizeTextareaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={'w-full bg-white text-green-900 p-2 rounded-xl border border-green-500 resize-none'}
    />
  );
};

export default AutoResizeTextarea;
