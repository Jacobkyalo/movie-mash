import React, { useState } from "react";
import FormComponent from "../forminput/form";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { headerParagraphSmall, questions } from "../../utils/strings";
import "./faqs.scss";

const Faqs = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="faqs-wrapper">
            <h1>Frequently Asked Questions</h1>
            <div className="faqs-questions">
                {questions?.map((question) => (
                    <div className="question" key={question.id}>
                        <div
                            className="faq-question"
                            onClick={() => setOpen(!open)}
                        >
                            <h2>{question.question}</h2>
                            {open ? (
                                <AiOutlineClose size={35} />
                            ) : (
                                <AiOutlinePlus size={35} />
                            )}
                        </div>
                        {open && (
                            <div className="faq-answer">
                                <p>{question.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="faqs-form">
                <p>{headerParagraphSmall}</p>
                <FormComponent />
            </div>
        </section>
    );
};

export default React.memo(Faqs);
