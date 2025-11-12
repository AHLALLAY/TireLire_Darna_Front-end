function LabeledInput({type, id, labelstyle, labelText, inputStyle, required, placeholder, value, onChange}) {
    const defaultLabelStyle = "text-sm font-semibold text-white mb-2";
    const defaultInputStyle = "w-full px-4 py-2 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all text-right";
    
    return (
        <div className="flex flex-col space-y-2" dir="rtl">
            <label
                htmlFor={id}
                className={labelstyle || defaultLabelStyle}
            >
                {labelText} {required && <span className="text-danger">*</span>}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
                required={required}
                className={inputStyle || defaultInputStyle}
                dir="rtl"
            />
        </div>
    );
}

export default LabeledInput;