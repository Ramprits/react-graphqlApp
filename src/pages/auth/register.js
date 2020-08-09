import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(10, 5, 6),
  },
}));
const Register = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={classes.heroContent}>
      <h3>Register Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name="example" defaultValue="test" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input name="exampleRequired" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
