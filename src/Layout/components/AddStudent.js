import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewStudent } from "../../Reducers/actions/action";

// style
import "../styles/AddStudent.scss";

export default function AddStudent() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", phone: "", age: "" });

  return (
    <div id="add-student">
      <div className="container">
        <span className="title">Add New Student</span>
        <form>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="text">Name*</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="Email">Email*</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setForm({ ...form, Email: e.target.value })}
                value={form.Email}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="phone">Phone*</label>
              <input
                type="number"
                placeholder="Enter Phone"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                value={form.phone}
                pattern="[0-9]{10}"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="age">Age*</label>
              <input
                type="number"
                placeholder="Enter Age"
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                value={form.age}
                id="age"
              />
            </div>
          </div>
        </form>
        <button
          className="submit"
          onClick={() => dispatch(addNewStudent(form))}
        >
          Add Student
        </button>
      </div>
    </div>
  );
}
