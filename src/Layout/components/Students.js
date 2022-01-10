import React, {useState} from 'react'
import {Grid, Input, Select} from 'react-spreadsheet-grid'

// style
import '../styles/Students.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeStudent, updateStudentData} from "../../Reducers/actions/action";


export default function Students() {
    const dispatch = useDispatch();
    const [setSelectedSubject] = useState(0);

    const students = useSelector(state => state.students);
    const skills = useSelector(state => state.skills);

    return <div id='students'>
        <div className="container">
            <span className='title'>List of Students</span>
            <Grid
                columns={[
                    {
                        title: () => 'ID',
                        value: (std, {focus}) => <Input
                            value={std.id}
                            focus={focus}
                        />
                    },
                    {
                        title: () => 'Name',
                        value: (std, {focus}) => <Input
                            value={std.name}
                            focus={focus}
                            onChange={(e) => dispatch(updateStudentData({id: std.id, key: "name", value: e}))}
                        />
                    },
                    {
                        title: () => 'Email',
                        value: (std, {focus}) => <Input
                            value={std.Email}
                            focus={focus}
                            onChange={(e) => dispatch(updateStudentData({id: std.id, key: "Email", value: e}))}
                        />
                    },
                    {
                        title: () => 'Age',
                        value: (std, {focus}) => <Input
                            value={std.age}
                            focus={focus}
                            onChange={(e) => dispatch(updateStudentData({id: std.id, key: "age", value: e}))}
                        />
                    },
                    {
                        title: () => 'Skills',
                        value: (row, {focus}) => <Select
                            items={skills}
                            isOpen={focus}
                            onChange={(e) => setSelectedSubject(e)}
                        />
                    },
                    {
                        title: () => 'Action',
                        value: (std, {focus}) => <i className="fas fa-trash-alt"
                                                    onClick={() => dispatch(removeStudent(std.id))}> </i>
                    }
                ]}
                rows={students}
                getRowKey={row => row.id}
            />
        </div>
    </div>
}
