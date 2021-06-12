import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTasks, setShowAddTasks] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'Go to the mall',
        day: 'July 22',
        reminder: true
    },
    {
        id: 2,
        text:'Pick up some food',
        day: 'April 1',
        reminder: false
    },
    {
        id: 3,
        text:'Take mom to hospital',
        day: 'August 18',
        reminder: true
    }
])
  //add task
  const addTask = (task) =>{
    console.log('added task')
    const id = tasks.length + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleAddTasks = () => {
    setShowAddTasks(!showAddTasks)
  }

  //delete task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const onToggle = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:
       !task.reminder} : task))

    
    // tasks.forEach((task) => {
    //   if (task.id === id){
    //     if (task.reminder){
    //       task.reminder = false
    //     } else{
    //       task.reminder = true
    //     }
    //     console.log('Task ' + id + ' is now set to ' + task.reminder)
    //   }
    // })
  }

  return (
    <div className='container'>
      <Header onAdd={toggleAddTasks} showAdd={showAddTasks}/>
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={onToggle}/> : 'You have no Tasks'}
    </div>
  )
}

export default App

