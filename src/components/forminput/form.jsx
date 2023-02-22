import React from "react";
import { Button } from "../Button";
import "./form.scss";

const FormComponent = () => {
    return (
        <form className="form">
            <input type="text" placeholder="Email address" />
            <Button text={"Get Started"} p="21px 30px" fs="1.3rem" />
        </form>
    );
};

export default React.memo(FormComponent);
