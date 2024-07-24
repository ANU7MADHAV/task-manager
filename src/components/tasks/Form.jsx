import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../redux/tasks/taskSlice";
import { addState } from "../../redux/tasks/formSlice";

export default function Form() {
  const selector = useSelector((state) => state.form.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = () => {
    dispatch(changeState());
  };
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addState(data));
    handleClick();
  };

  console.log("selector", selector);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <label htmlFor="" className="mx-4 -mb-4 font-light">
        Task Description
      </label>
      <section className="relative mx-4">
        <label
          htmlFor="task"
          className="pointer-events-none absolute left-3 top-2 text-gray-400" // Adjust styles as needed
        >
          Enter task description...
        </label>
        <input
          id="task"
          className="h-28 w-full appearance-none bg-[#d9d9d9] pb-2 pl-3 pt-6 outline-none"
          {...register("task", { required: true })}
        />
      </section>
      <section className="grid grid-cols-2 gap-y-4">
        <section className="mx-4 flex flex-col">
          <label htmlFor="project" className="font-light">
            Project Name
          </label>
          <input
            id="project"
            type="text"
            placeholder="Enter project name"
            {...register("project", { required: true })}
            className="bg-[#d9d9d9] px-2 py-1"
          />
        </section>
        <section className="mx-4 flex flex-col">
          <label htmlFor="" className="font-light">
            Progress (%)
          </label>
          <input
            type="text"
            placeholder="Update Progress"
            {...register("progress", { required: true })}
            className="bg-[#d9d9d9] px-2 py-1"
          />
        </section>
        <section className="mx-4 flex flex-col">
          <label htmlFor="status" className="font-light">
            Status
          </label>
          <input
            id="status"
            type="text"
            placeholder="Update Project Status"
            {...register("status", { required: true })}
            className="bg-[#d9d9d9] px-2 py-1"
          />
        </section>
      </section>

      <section className="my-3 mr-5 flex justify-end space-x-4">
        <input
          type="button"
          value="Cancel"
          className="bg-[#d9d9d9] px-4"
          onClick={() => dispatch(changeState())}
        />
        <input
          type="submit"
          value="+ Add New Task"
          className="bg-[#008dc9] px-2 text-white"
        />
      </section>
    </form>
  );
}
