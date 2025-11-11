function SelectOption({data, id, labelstyle, labelText, inputStyle, required, value, onChange}) {
    return (
        <div className="space-y-1">
            <label htmlFor={id} className={labelstyle}>
                {labelText} {required && <span className="text-red-600">*</span>}
            </label>
            <select 
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                className={inputStyle}
            >
                <option value="">Choisir ...</option>
                {data && data.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectOption;