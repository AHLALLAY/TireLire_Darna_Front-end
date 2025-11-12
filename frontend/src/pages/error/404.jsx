import Button from "../../components/common/button";

import { useNavigate } from "react-router-dom";

function Error404() {
    const goTo = useNavigate();
    const comeBackToHome = () => {
        goTo('/');
    }
    return (
        <div>
            <h1>404</h1>
            <p>We are sorry, we haven't what you looking for</p>

            <Button
                action = {comeBackToHome}
                style = ""
                text="Come Back"
            />
        </div>
    );
}

export default Error404;