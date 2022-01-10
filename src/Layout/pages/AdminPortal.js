import React from 'react';

// components
import AddStudent from "../components/AddStudent";
import Students from "../components/Students";

export default function AdminPortal() {
    return <>
        <AddStudent/>
        <Students/>
    </>
}
