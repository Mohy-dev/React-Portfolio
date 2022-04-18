import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./css/Form.css";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const options = [
    { value: "1", label: "Apple" },
    { value: "2", label: "Ball" },
    { value: "3", label: "Cat" },
  ];

  console.log(errors);
  console.log(handleRegistration);

  return (
    <div id="formHere" className="container form-wrapper">
      <Form className="user-form" onSubmit={handleSubmit(handleRegistration)}>
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Name</Form.Label>
          <Form.Control
            name="name"
            placeholder="name"
            {...register("name", {
              required: true,
              pattern: /^[a-z ,.'-]+$/i,
            })}
          />
        </Form.Group>
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-danger">Name is not valid</p>
        )}
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Group>
        {errors.email?.type === "required" && (
          <p className="text-danger">Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-danger">Email is not valid</p>
        )}
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
        </Form.Group>
        {errors.password?.type === "required" && (
          <p className="text-danger">Password is required</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-danger">Password is not valid</p>
        )}
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Phone</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            placeholder="phone"
            {...register("phone", {
              required: true,
            })}
          />
        </Form.Group>
        {errors.phone?.type === "required" && (
          <p className="text-danger">Phone is required</p>
        )}
        <div className="my-3">
          <Form.Label className="text-light">Select</Form.Label>
          <Controller
            control={control}
            rules={{ required: true }}
            name="selection"
            render={({ field }) => (
              <Select {...field} options={options} isMulti />
            )}
          />
          {errors.selection && (
            <p className="text-danger">Please choose before proceeding</p>
          )}
        </div>
        <div class="text-center">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
