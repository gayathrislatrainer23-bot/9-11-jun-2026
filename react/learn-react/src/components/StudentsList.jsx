function StudentList(){
    let students = ['Anitha', 'Sitha','Manu','Balu']
    
    return(
        <div className="StudentList">
        <ul>
       {
        students.map((student,index)=>(
            <li key={index}>{student}</li>
        )

        )
       }
        </ul>
        </div>
    )
}

export default StudentList;

     {/* <li>Anitha</li>
            <li>Sitha</li>
            <li>Manu</li>
            <li>Balu</li> */}