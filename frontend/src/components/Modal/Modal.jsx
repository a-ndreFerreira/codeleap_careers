import { useState } from "react"
import { toast } from "react-toastify";
import styles from './Modal.module.css'

const Modal = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            const username_regex = username.trim();
            onSignup(username_regex);
            toast(`Welcome, ${username_regex}`);
        } else {
            toast('Something wrong.');
            return;
        }
    }
    return (
        <div className={styles.wrapper_modal}>
            <div className={styles.modal}>
                <h2>
                    Welcome to CoadLeap Network!
                </h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Please enter your username</legend>
                        <input
                            type='text'
                            placeholder="Cliff Burton"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </fieldset>
                    <button type='submit' className={styles.button_modal}>
                        Enter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal