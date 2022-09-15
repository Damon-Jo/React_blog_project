/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','남자 신발 추천', '남자 팬티 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); //false== state of modal, but the type can be int, string...

  let [title, setTitle] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 가나다순정렬(){
    var sortedArray = [...글제목];
    sortedArray.sort();
    글제목변경(sortedArray);
  }

  function ModalControl(i){
    setTitle(i);
    if (modal == true){
      setModal(false)
    }else{
      setModal(true)
    }
  }


  function 따봉더하기(i){
    var newArray = [...따봉];
    newArray[i] += 1;
    따봉변경(newArray);
  }
  
  return (
    <div className="App">
     <div className="black-nav">
      <h4>개발 Blog</h4>
     </div>

     {/* 숙제 : 버튼 누르면 ->글제목 가나다순 정렬 기능 만들기 */}
     <button onClick={가나다순정렬}>가나다순정렬</button>
     
     <button onClick={제목바꾸기}>글제목수정</button>
     {/* <div className="list">
      <h3> {글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h3>
      <p>published 12th Sep</p>
      <hr/>
     </div>
     <div className="list">
      <h3> {글제목[1]} </h3>
      <p>published 12th Sep</p>
      <hr/>
     </div>
     <div className="list">
      <h3 onClick={ModalControl}> {글제목[2]} </h3>
      <p>published 12th Sep</p>
      <hr/>
     </div> */}

     {
      글제목.map(function(a, i){ //parameter a --> each element in 글제목(array)
        return(
          <div className="list" key={i}>
            <h3 onClick={()=>{setModal(true); setTitle(i)}}> {a} <span onClick={  ()=>{
              따봉더하기(i);
            }    }>👍</span> {따봉[i]} </h3>
            <p>published 12th Sep</p>
            <hr/>
          </div>
        )
      })
     }   

{/* How to transmit the state from parent to children? --->props */}
{/* 1. <in children component name={state name}> */}
{/* 2. register props parameter and then use props.name */}

     {
      modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
     }


    </div>
  );
}

//the step making dinamic UI
//1. Complete the design in advance using HTML CSS
//2. Save the current state of the UI as 'state'
//3. Write what it looks like according to the UI 

// the wat to make component
// 1. name should start Uppercase
// 2. Everything in return() must be enclosed in a single tag


function Modal(props){
  return(
    <div className = "modal">
      <h2>{ props.글제목[props.title] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
  </div>
  )
}

export default App;
