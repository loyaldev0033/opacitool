interface Options {
    label: string;
    value: number | string;
}

interface InputFieldProps {
    value: string | number;
    setState?: (prev: any) => void;
    data: {
        label: string;
        type: string;
        key?: string;
        placeholder?: string;
        options?: Options[];
        disabled?: boolean;
    };
}

const InputField = ({ setState, data, value }: InputFieldProps) => {
    const { label, type, placeholder = '', key, options, disabled = false } = data;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newValue = type === 'number' ? parseInt(e.target.value) : e.target.value;
        if (setState && key) {
            setState((prev: any) => ({ ...prev, [key]: newValue }));
        }
    };

    return (
        <div className='flex flex-col space-y-1'>
            <label className='text-sm text-gray-300'>{label}</label>
            {type === 'select' && options ? (
                <select
                    className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                />
            )}
        </div>
    );
};

export default InputField;
