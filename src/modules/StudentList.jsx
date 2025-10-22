import { useState } from "react";

const StudentList = () => {
    const [studentList,setStudentList] = useState([]);
    const [student, setStudent] = useState({ student_name: "" , student_age: ""});

    // const handleChangeName = (event) => {
    //     console.log("Name:",event.target.value);
    // }

    // const handleChangeAge = (event) => {
    //     console.log("Age:",event.target.value);
    // }

    const handleChange = (event) => {
        console.log("Common func:", event.target.name, event.target.value);
        setStudent({...student,[event.target.name]:event.target.value});        //dynamically work aaga used, if name typed doesnt disturb age nd viceversa
    }

    const handleStudent = () => {
        console.log("student :::", student);
        setStudentList([...studentList,student]);       //spread op is for a copy of input we given
    }
console.log("studentList :::", studentList)

    return(
        <div>
            <div>
                <h1>Student List Component</h1>
                <div>
                    <input name="student_name" type="text" placeholder="Enter Name" onChange={handleChange}/>
                </div>
                <div>
                    <input name="student_age" type="number" placeholder="Enter Age" onChange={handleChange}/>
                </div>
                    <button style={{margin: 2}} onClick={handleStudent}>Add Student</button>
            </div>
            {studentList?.length > 0 &&                             //to show in list downside
            studentList.map((student,index)=>{
                return (
                    <div key={index}>
                        Name : {student.student_name} , Age : {student.student_age}
                    </div>
                )
            })
            }
        </div>
    )
}

export default StudentList;