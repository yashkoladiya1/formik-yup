import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:""
}

function Formik() {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema, 
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    }
  });
//   console.log(errors)

  return (
    <div className="container my-3//">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          {errors.name && touched.name ? <p className="form-error">{errors.name}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputPassword1"
          />
          {errors.password && touched.password ? <p className="form-error">{errors.password}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputPassword1"
          />
          {errors.confirm_password && touched.confirm_password ? <p className="form-error">{errors.confirm_password}</p> : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formik;
