import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Logo from '../components/Logo';
import LogoImage from '../assets/AppLogo.png';
import MyTextInput from '../components/Form/MyTextInput';
import MyCheckbox from '../components/Form/MyCheckBox';
import MySelect from '../components/Form/MySelect';

// And now we can use these
const RegisterScreen = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Logo logoImage={LogoImage} appName="Coach Match Scheduler" />
        </div>
        <div>
          <h2 className="font-semibold text-[30px] text-[#0D1017]">
            Sign up to your account
          </h2>
        </div>
        <div>
          <p className="text-[16px] text-[#464D59]">
            Welcome coach! Please enter your details.
          </p>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default RegisterScreen;
