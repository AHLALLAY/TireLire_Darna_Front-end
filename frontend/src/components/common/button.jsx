function Button({ type = "button", text, action, style = "", disabled = false }) {
    const defaultStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-dark";
    const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const finalStyle = style || `${defaultStyle} bg-primary text-black hover:bg-primary-dark hover:text-white focus:ring-primary shadow-md hover:shadow-lg hover:shadow-primary/50`;
    
    return (
        <button
            type={type}
            onClick={action}
            disabled={disabled}
            className={`${finalStyle} ${disabledStyle}`}
        >
            {text}
        </button>
    );
}

export default Button;