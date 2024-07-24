import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../../components/tasks/TaskForm";
import TaskTable from "../../components/tasks/TaskTable";
import { changeState } from "../../redux/tasks/taskSlice";

const TaskPage = () => {

  const value = useSelector((state) => state.task.value);
  const dispatch = useDispatch();
  console.log(value);

  const handleToggle = () => {
   dispatch(changeState())
    console.log("clicked");
  };



  return (
    <div className="relative m-8">
      <section className="my-1 flex justify-end">
        <button
          className="bg-[#008dc9] z-50 cursor-pointer px-3 text-white"
          onClick={handleToggle}
        >
          + Add Task
        </button>
      </section>

      {value && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <TaskForm />
        </div>
      )}
      <div className={value ? "blurred" : ""}>
        <TaskTable />
      </div>
      {value && <div className="fixed inset-0 z-40 bg-black opacity-50"></div>}
 
    </div>
  );
};

export default TaskPage;
