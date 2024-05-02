import React, { useState } from 'react'
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import RegImg from "./assests/undraw_events_re_98ue.svg"
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone_number: "",
            event: ""
        },

        validate: (values) => {
            console.log('values in validate', values);
            let errors = {};

            if (!values.full_name) {
                errors.full_name = "Please enter your full name"
            } else if (values.full_name.length < 5) {
                errors.full_name = "Name shouldn't be less than 3 letters";
            } else if (values.full_name.length > 20) {
                errors.full_name = "Name shouldn't be more than 20 letters";
            }

            if (!values.email) {
                errors.email = "Please enter email";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.phone_number) {
                errors.phone_number = "Please enter phone number";
            } else if (!/^[0-9]+$/) {
                errors.phone_number = "Number cannot contain characters"
            }

            if (!values.event) {
                errors.event = "Please select an event"
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post("http://localhost:8000/user/register", values);

                toast.success("Registered successfully!")
                setLoading(false);
            } catch (err) {
                toast.error(err.message)
            }
        }
    })
    return (
        <>
            <div className="container my-5">
                <h1 className='text-center'>Event Registration</h1>
                <div className='row align-items-center my-5 row-reverse'>
                    <div className='col-lg-6'>
                        <img src={RegImg} alt='' width="100%" />
                    </div>
                    <div className='col-lg-6'>
                        <form onSubmit={myFormik.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Full Name</label>
                                    <input
                                        name="full_name"
                                        value={myFormik.values.full_name}
                                        onChange={myFormik.handleChange}
                                        type={"text"}
                                        className={`form-control ${myFormik.errors.full_name ? "is-invalid" : ""
                                            } `}
                                    />
                                    <span style={{ color: "red" }}>{myFormik.errors.full_name}</span>
                                </div>

                                <div className="col-lg-6">
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        value={myFormik.values.email}
                                        onChange={myFormik.handleChange}
                                        type={"email"}
                                        className={`form-control ${myFormik.errors.email ? "is-invalid" : ""
                                            } `}
                                    />
                                    <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                                </div>

                                <div className="col-lg-6">
                                    <label>Phone Number</label>
                                    <input
                                        name="phone_number"
                                        value={myFormik.values.phone_number}
                                        onChange={myFormik.handleChange}
                                        type={"number"}
                                        className={`form-control ${myFormik.errors.phone_number ? "is-invalid" : ""
                                            } `}
                                    />
                                    <span style={{ color: "red" }}>{myFormik.errors.phone_number}</span>
                                </div>

                                <div className="col-lg-6">
                                    <label>Events</label>
                                    <select
                                        name="event"
                                        value={myFormik.values.event}
                                        onChange={myFormik.handleChange}
                                        className={`form-control ${myFormik.errors.event ? "is-invalid" : ""
                                            } `}
                                    >
                                        <option value="">----Select----</option>
                                        <option value="Painting">Painting</option>
                                        <option value="Singing">Singing</option>
                                        <option value="Dance">Dance</option>
                                        <option value="Stand-up">Stand-up</option>
                                        <option value="Play">Play</option>
                                    </select>
                                    <span style={{ color: "red" }}>{myFormik.errors.event}</span>
                                </div>


                                <div className="col-lg-4 mt-3">
                                    <input
                                        disabled={isLoading}
                                        type="submit"
                                        value={isLoading ? "Submitting..." : "Register"}
                                        className=" btn btn-primary"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Register