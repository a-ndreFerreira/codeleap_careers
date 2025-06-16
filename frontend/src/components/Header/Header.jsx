import styles from './Header.module.css';

const Header = ({ usernameContext, handleSubmit, title, setTitle, content, setContent }) => {
    return (
        <div className={styles.app_start}>
            <header className={styles.app_header}>
                <h2>
                    What's on your mind{`, ${usernameContext}`}?
                </h2>
                {/* <p>
                    ... <strong></strong>
                </p> */}
            </header>
            <form onSubmit={handleSubmit} className={styles.form_header}>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        type={'text'}
                        id={'title'}
                        name={'title'}
                        placeholder={'Hello world'}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Content</legend>
                    <textarea
                        type={'text'}
                        id={'content'}
                        name={'content'}
                        placeholder={'Content here'}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </fieldset>
                <button type={'submit'} className={styles.button_header}>
                    Create
                </button>
            </form>
        </div>
    )
}

export default Header