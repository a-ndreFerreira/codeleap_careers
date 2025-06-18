import './App.css'
import Modal from './components/Modal/Modal'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import { UserContextProvider } from './context/UserContext'
import { useUser } from './hooks/useUser'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { useGetAll } from './hooks/useGetAll'
import ModalDelete from './components/ModalDelete/ModalDelete'
import { useDelete } from './hooks/useDelete'
import { usePost } from './hooks/usePost'
import ModalEdit from './components/ModalEdit/ModalEdit'
import Header from './components/Header/Header'
import SectionMap from './components/SectionMap/SectionMap'

function MainApp() {
  const { usernameContext, setUsernameContext } = useUser();
  const [showModal, setShowModal] = useState(!usernameContext);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [reload, setReload] = useState(false);
  const { data, loading, error } = useGetAll([reload]);
  const { deleteItem, error: errorDelete, loading: loadingDelete } = useDelete();
  const [itemDelete, setItemDelete] = useState(null);
  const [itemEdit, setItemEdit] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { postItem, error: errorPost } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usernameContext || !title || !content) {
      toast('Fill in all fields.');
      return;
    }
    const payload = {
      username: usernameContext,
      title: title.trim(),
      content: content
    }
    const success = await postItem(payload);
    if (success) {
      toast('Success Post Item');
      setTitle('');
      setContent('');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setReload(prev => !prev);
      return;
    } else {
      toast('Ops... Something went wrong.')
      return;
    }
  }
  const handleSignup = (newUser) => {
    setUsernameContext(newUser);
    setShowModal(false);
    localStorage.setItem('username', newUser);
  }
  const handleSignout = () => {
    setUsernameContext(null);
    setShowModal(true);
    localStorage.removeItem('username');
  }
  const handleDelete = (itemId) => {
    setShowModalDelete((prev) => !prev)
    setItemDelete(itemId)
  }
  const handleEdit = (id, username, itemTitle, itemContent) => {
    setShowModalEdit((prev) => !prev);
    setItemEdit({ id, username, itemTitle, itemContent });
  }

  if (loading) return <p>Loading posts...</p>;
  if (loadingDelete) return <p>Deleting post...</p>;
  if (error) {
    toast(`${error}`)
  }
  if (errorDelete) {
    toast(`${errorDelete}`)
  }
  if (errorPost) {
    toast(`${errorPost}`)
  }
  return (
    <div className="app_container">
      {
        showModal && <Modal onSignup={handleSignup} />
      }
      {
        showModalDelete && <ModalDelete
          handleShowModalDelete={handleDelete}
          deleteItem={deleteItem}
          itemDelete={itemDelete}
          setReload={setReload}
        />
      }
      {
        showModalEdit && <ModalEdit
          handleShowModalEdit={handleEdit}
          itemEdit={itemEdit}
          setReload={setReload}
        />
      }
      {
        usernameContext && (
          <div className="app_wrapper">
            <Navbar handleSignout={handleSignout} />
            <main className="app_main">
              <Header
                usernameContext={usernameContext}
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
              />
              <SectionMap
                data={data}
                usernameContext={usernameContext}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </main>
          </div >
        )
      }
    </div >
  )
}

export default function App() {
  return (
    <UserContextProvider>
      <ToastContainer />
      <MainApp />
    </UserContextProvider>
  )
}
