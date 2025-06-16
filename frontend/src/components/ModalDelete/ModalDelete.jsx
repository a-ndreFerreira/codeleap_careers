import { toast } from "react-toastify";
import styles from './ModalDelete.module.css'

const ModalDelete = ({ handleShowModalDelete, deleteItem, itemDelete, setReload }) => {
    const handleDelete = async () => {
        const success = await deleteItem(itemDelete);
        if (success) {
            handleShowModalDelete();
            setReload(prev => !prev);
            toast('Delete Item success.');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            toast('Ops... Something went wrong.');
            return;
        }

    }
    return (
        <div className={styles.modal_delete}>
            <div className={styles.box}>
                <h2>
                    Are you sure you want to delete this item?
                </h2>
                <div className={styles.controls_delete}>
                    <button type={'button'} onClick={handleShowModalDelete} className={styles.cancel}>
                        Cancel
                    </button>
                    <button type={'button'} onClick={handleDelete} className={styles.delete}>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete