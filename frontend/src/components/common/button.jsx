function Button({ type = "button", text, action, style = "" }) {
    return (
        <button
            type={type}
            onClick={action}
            className={style}
        >
            {text}
        </button>
    );
}

export default Button;