import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskModal from "./TaskModal";
// import { useParams } from "react-router-dom";

interface TaskQuestion {
  taskTitle: string;
  taskQuestion: JSX.Element;
  path: string;
  details: string
}

const TaskQuestions: React.FC = () => {
  /* const { taskId } = useParams<{ taskId: string }>(); */
  const [modalIsOpen, setModalIsOpen] = useState<boolean[]>([]);
  // const [answers, setAnswers] = useState<Record<string, string>>({});
  const [editMode, _setEditMode] = useState<boolean[]>([]);
  const [editableIndex, setEditableIndex] = useState<number | null>(null);
  const [taskQuestions, setTaskQuestions] = useState<TaskQuestion[]>([]);
  const initialContent = (
    <p>
      Write a paragraph explaining the importance of <strong>HTML</strong> in web development.
      Use <em>italics</em> to emphasize key points and demonstrate <code>&lt;code&gt;</code> elements for code snippets.
    </p>
  );

  useEffect(() => {
    const fetchTaskQuestions = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(import.meta.env.VITE_APP_SSMP_BACKEND_API + "tasks/getAllTask", {
          headers: {
            Authorization: `Bearer ${token}`,
            role: "ADMIN"
          }
        });
        const fetchedData = response.data.data.getAllTask;
        console.log("Fetched Task Data:", fetchedData);
        setTaskQuestions(fetchedData);
      } catch (error) {
        console.error("Error fetching task questions:", error);
      }
    };

    fetchTaskQuestions();
  }, []);

  const openModal = (index: number) => {
    setEditableIndex(index);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = true;
    setModalIsOpen(newModalIsOpen);
  };

  const closeModal = (index: number) => {
    setEditableIndex(null);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = false;
    setModalIsOpen(newModalIsOpen);
  };

/*   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  }; */

  const handleQuestionEdit = (index: number, editedQuestion: string) => {
    if (editableIndex !== null) {
      const updatedQuestions = [...taskQuestions];
      updatedQuestions[editableIndex].taskQuestion = <p>{editedQuestion}</p>;
      setTaskQuestions(updatedQuestions);
      closeModal(index);
    }
  };

  const handleEditConfirmation = (index: number) => {
    setEditableIndex(index);
    openModal(index);
  };

  return (
    <div className="flex h-[100vh] w-screen">
      <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
        {taskQuestions.map((taskItem, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold">
              Task Submission: {taskItem.taskTitle}
            </h2>

            <div className="mt-4">
              <label className="block text-base font-bold text-gray-700">
                Task Question
              </label>
              {editMode[index] ? (
                <textarea
                  value={taskQuestions[index].taskQuestion.props.children}
                  onChange={(e) => {
                    const editedQuestion = e.target.value;
                    handleQuestionEdit(index, editedQuestion);
                  }}
                  // Add necessary attributes and styling
                />
              ) : (
                <div className="mt-2 text-gray-700">
                  {taskItem.details}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-base font-bold text-gray-700">
                Enter Answers Below
              </label>
              {editMode[index] ? (
                <textarea
                  value={taskQuestions[index].taskQuestion.props.children}
                  onChange={(e) => {
                    const editedQuestion = e.target.value;
                    handleQuestionEdit(index, editedQuestion);
                  }}
                  // Add necessary attributes and styling
                />
              ) : (
                <div className="mt-2 text-gray-700">
                  {initialContent.props.children[index]}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleEditConfirmation(index)}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 float-right"
            >
              Edit Question
            </button>

            {modalIsOpen[index] && (
              <div className="overlay" onClick={() => closeModal(index)} />
            )}

            {editableIndex === index && (
              <TaskModal
                isOpen={modalIsOpen[index]}
                onRequestClose={() => closeModal(index)}
                onConfirm={() =>
                  handleQuestionEdit(index, taskQuestions[index].taskQuestion.props.children as string)
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskQuestions;
