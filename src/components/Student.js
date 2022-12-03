
import {useState,useEffect} from 'react';
import axios from 'axios';

function Student(){
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]);
    //useEffect (function; param - dependency)
    
    // useEffect(() => {
    //   fetch("http://localhost/sat-app/db2.php")
    //     .then((response) => response.json())
    //     .then((data) => setStudents(data));
    // }, []);
  
    useEffect( ()=> {
      const url = 'http://localhost/sat-app/db2.php'; //link to db
      axios.get(url).then((response) => {
        setStudents(response.data);
        console.log(students);
      })
    },[])

    const submitBtn = function(e){
      e.preventDefault();
      let getData = new FormData ();
      getData.append('fname', fname); //key-value pairs
      getData.append('lname', lname); 
      getData.append('age', age); 
      getData.append('function', 'insert');
      axios({
        method:'POST', //get/post
        url:'http://localhost/sat-app/db2.php', //db link
        data: getData, // data to be transfered
        config:'Content-Type= "multipart/form-data"'
      }).then(function(response){
        const url = 'http://localhost/sat-app/db2.php';
        axios.get(url).then((response) => {
          setStudents(response.data);
          console.log(students);
        })
      });
    }

    const delBtn =function(e){
      let getData = new FormData ();
      getData.append('stud_id', e.currentTarget.id);
      getData.append('function', 'delete'); 
    
      axios({
        method:'POST', //get/post
        url:'http://localhost/sat-app/db2.php', //db link
        data: getData, // data to be transfered
        config:'Content-Type= "multipart/form-data"'
      }).then(function(response){
        const url = 'http://localhost/sat-app/db2.php';
        axios.get(url).then((response) => {
          setStudents(response.data);
          console.log(students);
        })
      });
    }

    const upBtn =function(e){
      // alert(e.currentTarget.title);
      let getData = new FormData ();
      getData.append('stud_id', e.currentTarget.title);
      getData.append('fname', document.getElementById('fname' + e.currentTarget.title).value);
      getData.append('lname', document.getElementById('lname' + e.currentTarget.title).value);
      getData.append('age', document.getElementById('age' + e.currentTarget.title).value);
      getData.append('function', 'update');

      axios({
        method:'POST', //get/post
        url:'http://localhost/sat-app/db2.php', //db link
        data: getData, // data to be transfered
        config:'Content-Type= "multipart/form-data"'
      }).then(function(result){
        alert("Successfully updated!");

      }).catch(function(error){
        alert("Error");
        console.log(error);
      });
    }
  

    return(
      <>
        <h1>Student's List</h1>

        <form>
          <input type="text" name="fname" value= {fname} onChange = {(e) => setFname(e.target.value)}/>
          <input type="text" name="lname" value= {lname} onChange = {(e) => setLname(e.target.value)}/>
          <input type="number" name="age" value= {age} onChange = {(e) => setAge(e.target.value)}/>
          <input type="submit" name="submit" onClick = {submitBtn} />
        </form>

          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody> 
              {students.map((val) => {
              return(
                <tr key={val.stud_id}>
                  <td><input id= {'fname' + val.stud_id} defaultValue = {val.firstname}></input></td>
                  <td><input id= {'lname' + val.stud_id}  defaultValue = {val.lastname}></input></td>
                  <td><input id= {'age' + val.stud_id} defaultValue = {val.age}></input></td>
                  <td><button id ={val.stud_id} onClick = {delBtn}>Delete</button></td>
                  <td><button title ={val.stud_id} onClick ={upBtn}>Update</button></td>
                </tr>
              )
            })}
            </tbody>
          </table>
      </>
    )
}
export default Student;