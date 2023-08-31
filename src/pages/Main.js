import React from 'react'
import { useNavigate } from 'react-router-dom'


function Main({userName, ChangeEvent,quizList,quiz, selected}) { //userName는 props 넘기는 데이터임
  
  let navigate = useNavigate(); 
  
  const type = quiz.map(item=>item.type); 
  //Quizlist.js에 type이 9개 있는데 이것을 반복문 돌려야함
  const typeSelect =[...new Set(type)] ;
  //중복을 제거하고 새로운 배열을 만드는 코드 
  // console.log(typeSelect) -> Array(3)개 나오게됨
  const nameChk = () =>{
    (userName === "" 
    ?  function(){
      alert('이름을 입력해주세요')
      document.querySelector("input").focus();
    }()
    : navigate("/quiz")
    )
  }

  
  return (
    <>
    {userName}
    <div className='w-full flex items-center h-full'>
      <div className='mx-auto basis-11/12 lg:basis-10/12'>
        <div className='bg-white rounded-lg p-5 pb-0'>
          <div className='text-center flex flex-wrap justify-between'>
            <input defaultValue={userName} onChange={ChangeEvent} className="name border pl-4 py-2 rounded-md shadow-md outline-none basis-full sm:basis-8/12 "type="text" placeholder='이름을 입력해주세요' />
            <button className='text-white btn-primary text-sm sm:text-base bg-blue-500 hover:bg-blue-700 focus:ring-blue-400 sm:py-0 basis-full sm:basis-3/12 mt-5 sm:mt-0' onClick= {nameChk}>시작하기</button>
            <h3 className="my-5 basis-full text-center">{userName !== "" && <><span className='text-indigo-500 font-bold'>{userName}님</span> <span>문제 유형은 기본값으로 설정 되어있으며, 총 {quiz.length}문제 중 1문제를 선택하셨습니다.</span> </>}</h3>
            {/* 비어있지않다면~... */}
            {/* 조건문 if,else 대신 삼항연산자를 사용해서 작동시킴 */}
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-5 mt-5 flex justify-between flex-wrap items-center">
          <div className="flex justify-around items-center xl:basis-4/12 basis-full">
            <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12">랜덤설정</button>
            <select className='random border rounded basis-6/12 text-center py-1.5' onChange={ChangeEvent}>
              <option value="0">기본</option>
              <option value="1">랜덤</option>
            </select>
          </div>
          <div className="flex justify-around items-center xl:basis-4/12 basis-full">
            <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12 my-5">갯수설정</button>
              <select className='cnt border rounded basis-6/12 text-center py-1.5' onChange={ChangeEvent} defaultValue={selected}>
               {// 데이터에 있는 값은 없는 length 만큼 배열이 만들어짐
                Array(quizList.length).fill().map((e,i)=>{
                  return <option value={i+1} key={i}>{i+1}문제</option>
                })
                
               }
              </select>
          </div>
          <div className="flex justify-around items-center xl:basis-4/12 basis-full">
            <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12">문제유형</button>
            <select className='type border rounded basis-6/12 text-center py-1.5' onChange={ChangeEvent}>
                <option value="전체">전체 ({quiz.length}문제)</option>
                { //html,css,js의 개수를 각각 표시해주기 위해서 
                  typeSelect.map(el =>{
                    return <option value={el} key={el}>{el}({quiz.filter(e => el===e.type).length}문제)</option>
                    //quiz는 원본임
                    //el이 html,css,js임 
                    //반복문이 3번 돌아감 
                    //중괄호를 쓰면 return문을 써야하고 중괄호를 안쓰면 return문이 생략가능함
                  })
                }
              </select>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main