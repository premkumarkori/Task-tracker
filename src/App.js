import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [tasks,setTasks] =useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
])
//Delete Task
const deleteTasks=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))

}
//Toggle Remainder
const toggleRemainder=(id)=>{
 setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="Container">
       <Header  />
       <AddTask/>
      {tasks.length>0? <Tasks tasks={tasks} 
      onDelete={deleteTasks}
      onToggle={toggleRemainder}
      />:'No Tasks To Show'}
    </div>
  );
}

export default App;
