function LabeledInput({type, id, labelstyle, labelText, inputStyle, required, placeholder, value, onChange}) {
    return (
        <div className="space-y-1">
            <label
                htmlFor={id}
                className={labelstyle}
            >
                {labelText} {required && <span className="text-red-600">*</span>}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={inputStyle}
            />
        </div>
    );
}

export default LabeledInput;