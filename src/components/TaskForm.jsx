import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
// Css
import Css from "./TaskForm.module.css";

const TaskForm = () => {
  const taskInputId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, events) => {
    console.log("Formik Form Submitted: ", values, events);

    dispatch(addTask(values));
  };

  return (
    <Formik
      initialValues={{ text: "", completed: false }}
      onSubmit={handleSubmit}
    >
      <Form method="Post" className={Css.Form}>
        <div className={Css.FormGroup}>
          <label htmlFor={taskInputId} className={Css.Label}>
            Task:
          </label>
          <Field
            className={Css.Input}
            type="text"
            name="text"
            id={taskInputId}
            placeholder="New Task Content"
          />
        </div>
        <div className={Css.FormGroup}>
          <button type="submit" className={Css.Btn}>
            Ekle
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default TaskForm;
