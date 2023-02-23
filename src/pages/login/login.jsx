import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./login.scss";

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-content">
                <Logo />
                <div className="form-wrapper">
                    <form>
                        <h1>Sign In</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Email or phone number"
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign In" />
                        <div className="help">
                            <p>
                                <input type="checkbox" />
                                Remember me
                            </p>
                            <p>Need help?</p>
                        </div>
                        <div className="alt">
                            <p>
                                New to Netflix?
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "var(--color)",
                                    }}
                                >
                                    Sign up now.
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
