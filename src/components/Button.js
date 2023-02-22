import { AiOutlineRight } from "react-icons/ai";

export const Button = ({ text, p, m, br, fs }) => {
    return (
        <>
            <button
                style={{
                    padding: p,
                    margin: m,
                    backgroundColor: "var(--primary-color)",
                    color: "var(--color)",
                    border: "none",
                    borderRadius: br,
                    fontSize: fs,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {text}
                <AiOutlineRight style={{ marginLeft: "3px" }} />
            </button>
        </>
    );
};
