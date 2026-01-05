import { useEffect } from 'react'
import Navbar from './Navbar'
import PopModal from './PopModal'
import { useState } from 'react'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const openModalHandler = () => {
    setShowModal(true)
  }
  
return (
  <div>
    <Navbar />
    <div className="container">
      <div className="add-task">
        <h1>Your Task</h1>
        <input type="search" placeholder='search your task' />
        <button className='btn btn-primary' onClick={openModalHandler}>Create Task <i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
    <h1>{title}and {description}</h1>
    <PopModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
    />
  </div>
)
}

export default Home
