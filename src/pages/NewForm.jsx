import React from 'react';
import { useForm } from "react-hook-form";

const NewForm = () => {
    const {register, handleSubmit, formState: { errors },} = useForm();

  return (
    <div className='container my-5'>
        <form onSubmit={handleSubmit((data) => console.log(data))}>

            <input {...register('firstName',{ required: true })} className="form-control"/>
            {errors.firstName && <p>First name is required.</p>}
            

            <br/>
            <input {...register('lastName', { required: true })} className="form-control" />
            {errors.lastName && <p>Last name is required.</p>}

            <br/>
            <input {...register('age', { pattern: /\d+/ })}  className="form-control"/>
            {errors.age && <p>Please enter number for age.</p>}
            
            <br/>
            <input className='btn btn-primary' type="submit" />
        </form>
    </div>
  );
};

export default NewForm;
