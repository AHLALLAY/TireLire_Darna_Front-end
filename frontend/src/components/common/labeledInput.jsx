import { useTranslation } from 'react-i18next';

function LabeledInput({type, id, labelstyle, labelText, inputStyle, required, placeholder, value, onChange}) {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const direction = isRTL ? 'rtl' : 'ltr';
    
    const defaultLabelStyle = "text-sm font-semibold text-white mb-2";
    const defaultInputStyle = `w-full px-4 py-2 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all ${isRTL ? 'text-right' : 'text-left'}`;
    
    return (
        <div className="flex flex-col space-y-2" dir={direction}>
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
                dir={direction}
            />
        </div>
    );
}

export default LabeledInput;