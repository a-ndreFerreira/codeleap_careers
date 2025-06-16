import styles from './SectionMap.module.css';
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

const SectionMap = ({ data, usernameContext, handleDelete, handleEdit }) => {
    return (
        <section className={styles.section_wrapper}>
            {
                data && data.length > 0 ? data.map(({ id, title, username, content, created_datetime }) => (
                    <article key={id} className={styles.article}>
                        <div className={styles.section_header}>
                            <h2>
                                {title}
                            </h2>
                            {
                                usernameContext === username && (
                                    <div className={styles.controls_header}>
                                        <button type={'button'} onClick={() => handleDelete(id)} className={styles.control_trash}>
                                            <TbTrashXFilled />
                                        </button>
                                        <button type={'button'} onClick={() => handleEdit(id, username, title, content)} className={styles.control_edit}>
                                            <FaRegEdit />
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        <div className={styles.section_sub}>
                            <h4>
                                @{username}
                            </h4>
                            <p>
                                {new Date(created_datetime).toLocaleString("pt-BR", {
                                    timeZone: "America/Sao_Paulo",
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </p>
                        </div>
                        <div className={styles.section_content}>
                            <p>
                                {content}
                            </p>
                        </div>
                    </article>
                )) : (
                    <p>Ops... No posts</p>
                )
            }
        </section>
    )
}

export default SectionMap