import { useField } from 'formik';

interface MySelectProps {
  label: string;
  name: string;
  id?: any;
  children: React.ReactNode;
}

const MySelect: React.FC<MySelectProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
