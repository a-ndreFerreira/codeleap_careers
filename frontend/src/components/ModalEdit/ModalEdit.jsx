import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdate } from "../../hooks/useUpdate";
import styles from './ModalEdit.module.css'

const ModalEdit = ({ handleShowModalEdit, itemEdit, setReload }) => {
    const { updateItem, error } = useUpdate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!itemEdit.id) {
            toast('No credentials.');
            return;
        }
        const payload = {
            id: itemEdit.id,
            username: itemEdit.username,
            title: title.trim(),
            content: content
        }
        const success = await updateItem(itemEdit.id, payload);
        if (success) {
            handleShowModalEdit();
            setReload((prev) => !prev);
            toast('Update Item success.');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            toast('Ops... Something went wrong.');
            return;
        }
    }
    useEffect(() => {
        if (itemEdit) {
            setTitle(itemEdit.itemTitle);
            setContent(itemEdit.itemContent)
        }
    }, [])
    return (
        <div className={styles.modal_edit}>
            <div className={styles.box}>
                <h2>
                    Edit Item
                </h2>
                <form onSubmit={handleSubmit} className={styles.form_edit}>
                    <fieldset>
                        <legend>Title</legend>
                        <input
                            type={'text'}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Content</legend>
                        <textarea
                            type={'text'}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </fieldset>
                    <div className={styles.controls_edit}>
                        <button type={'button'} onClick={handleShowModalEdit} className={styles.button}>
                            Cancel
                        </button>
                        <button type={'submit'} className={styles.submit}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalEdit