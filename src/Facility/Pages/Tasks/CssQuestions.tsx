import React, { useState, useEffect,FC } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

interface Task {
  _id: string;
  course: string;
  taskTitle: string;
  taskPoints: number;
  status: string;
  deadline: string;
}

const CssQuestion: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  // const navigate = useNavigate();

  // Function to fetch task data from the backend
  const fetchTasksFromBackend = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get<{ data: Task[] }>(import.meta.env.VITE_APP_SSMP_BACKEND_API + "tasks/getAllTask", {
        headers: {
          Authorization: `Bearer ${token}`,
          role: "ADMIN"
        }
      }); 
      if (response.status === 200) {
        const data = response.data.data;
        console.log("mama data!!!",data);
        
        const htmlTasks = data.filter((task) => task.course.toUpperCase() === "Css".toUpperCase());
        console.log(htmlTasks);
        setTasks(htmlTasks); // Update the tasks state with the fetched data
      } else {
        console.error("Failed to fetch task data from the backend");
      }
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };

  useEffect(() => {
    fetchTasksFromBackend(); // Fetch tasks when the component mounts
  }, []);

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addTask = (taskDetails: Task) => {
    setTasks([...tasks, taskDetails]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskDetails: Task = {
      _id: "",
      course: formData.get("course") as string,
      taskTitle: formData.get("taskTitle") as string,
      taskPoints: parseInt(formData.get("taskPoints") as string),
      status: "Not Submitted",
      deadline: formData.get("deadline") as string,
    };
    addTask(taskDetails);
    event.currentTarget.reset();
  };

  /* const handleViewClick = (taskId: string) => {
    navigate(`/taskQuestions/${taskId}`); 
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="course" placeholder="Course" />
        <input type="text" name="taskTitle" placeholder="Task Title" />
        <input type="number" name="taskPoints" placeholder="Task Points" />
        <input type="text" name="deadline" placeholder="Deadline" />
        <button type="submit">Submit</button>
      </form>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 font-bold text-sm">
            <th className="py-2 px-4 ">Course</th>
            <th className="py-2 px-4">Task Title</th>
            <th className="py-2 px-4">Task Points</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Details</th>
            <th className="py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {tasks.map((task, index) => (
            <tr
              key={index}
              className="text-center cursor-pointer rounded-xl text-gray-500 text-sm"
            >
              <td className="py-2 px-4">{task.course}</td>
              <td className="py-2 px-4">{task.taskTitle}</td>
              <td className="py-2 px-4">{task.taskPoints}</td>
              <td className="py-2 px-4">{task.status}</td>
              <td className="py-2 px-4"> {new Date(task.deadline).toISOString().split('T')[0]}</td>
              <td className="py-2 px-4 hover:underline">
                <Link to={`/details/${task._id}`}>View</Link>
              </td>
              <td className="py-2 px-4 text-red-400">
                <button onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CssQuestion;




"CssQuestion"