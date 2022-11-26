import formImage from "../public/form.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { createSearchParams, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

interface MyFormValue {
  name: string;
  email: string;
  country: string;
  terms: string;
}

const App = () => {
  const initialValues: MyFormValue = {
    name: "",
    email: "",
    country: "United Kingdom",
    terms: "",
  };
  const navigate = useNavigate();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="h-screen flex items-center justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            navigate({
              pathname: "/success",
              search: createSearchParams({
                name: values.name,
                email: values.email,
                country: values.country,
                terms: values.terms,
              }).toString(),
            });
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(20, "Name must be 20 characters or less.")
              .required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),

            terms: Yup.array().required("Terms of service must be checked"),
          })}
        >
          {({
            handleSubmit,
            values,
            handleChange,
            errors,
            handleBlur,
            touched,
          }) => (
            <form
              className="bg-white flex rounded-lg w-1/2 font-latoRegular "
              onSubmit={handleSubmit}
            >
              <div className="flex-1 text-gray-700 p-20">
                <h1 className="text-3xl pb-2 font-latoBold">
                  Let'get started 👋
                </h1>
                <p className="text-lg text-gray-500 font-latoRegular">
                  Join our E-Learning platform today unlock over 500+ courses
                  and digital assets ready to download.
                </p>
                <div className="mt-6 ">
                  <div className="pb-4 ">
                    <label
                      htmlFor="name"
                      className={`block text-sm pb-2 font-latoBold ${
                        touched.name && errors.name ? "text-red-400" : ""
                      }`}
                    >
                      {touched.name && errors.name ? errors.name : "Name"}
                    </label>
                    <input
                      className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 outline-none"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="e-mail"
                      className={`block text-sm pb-2 font-latoBold ${
                        touched.email && errors.email ? "text-red-400" : ""
                      }`}
                    >
                      {touched.email && errors.email ? errors.email : "Email"}
                    </label>
                    <input
                      className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-green-500  focus:ring-teal-500 outline-none"
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="country"
                      className="block text-sm pb-2 font-latoBold"
                    >
                      Country
                    </label>
                    <select
                      name="country"
                      className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 outline-none"
                      value={values.country}
                      onChange={handleChange}
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Norway</option>
                    </select>
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="terms"
                      className={`font-latoBold block text-sm pb-2 ${
                        touched.terms && errors.terms ? "text-red-400" : ""
                      }`}
                    >
                      {touched.terms && errors.terms
                        ? errors.terms
                        : "  Terms of services"}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="terms"
                        value="checked"
                        className="h-5 w-5 text-teal-500  form-checkbox  border-2 focus:border-teal-500 focus:ring-teal-500"
                        onBlur={handleBlur}
                      />
                      <p className="text-sm font-latoBold">
                        I agree to the Terms and Services that my data will be
                        taken and sold.
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" ring-teal-800 bg-teal text-sm py-3 text-white mt-6 rounded-lg w-full bg-teal-500 font-latoBold "
                  >
                    Start Learning today!
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <img
                  src={formImage}
                  alt="form-learn"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </form>
          )}
        </Formik>
      </main>
    </m.div>
  );
};

export default App;
