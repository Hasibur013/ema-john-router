import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hoooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                {/* errors will return when field validation fails  */}
                <input defaultValue="" {...register("address")} placeholder="Address"/>
                <input defaultValue="" {...register("city")} placeholder="City"/>
                <input defaultValue="" {...register("phone",{ required: true })} placeholder="Phone"/>
                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;