import React, { useState } from 'react'
import QuizList from '../components/Quizlist'



function Detail({userName, quizList}) {
 
  const [current,setCurrent] = useState(0);
  // useState(번호) -> 내가 현재 풀고 있는 번호
  const [userAnswer,setAnswer] =useState([]);
  //0901-3 -> 오답풀이 적기
  
  const setUserAnswer =(data) =>{
    setAnswer([...userAnswer, data]) 
    //원래 배열을 복사해서 원래 배열에 새로운 데이터를 추가해준다는 개념임 
  }

  const _score = quizList.filter((e,i)=>{ //원래 답이랑 비교하는 대상의 변수를 만들어줌
    return e.answer === userAnswer[i]
  }).length
  //0901-1
  const currentPer = Math.floor(((current+1)/quizList.length)*100)

  //  내가 한거 
  // const quizQuestion = quizList.map((e)=>{
  //   return e.question 
  // })
  // const quizView = quizList.map((e)=>{
  //  return Object.entries(e.view);
  // })


  return (
    <>

    {/* <div>{userName}</div>
    <div>{quizList.length}</div> -> 문제 개수가 나오게됨 */}
        <div className="w-full flex items-center h-full">
          <div className="mx-auto basis-11/12 lg:basis-10/12 flex flex-wrap items-center h-full">
            {/* {_score}  */}
            {/* 출력할때는 정답의 개수만큼 숫자가 올라가고 틀린답을 고르면 숫자가 그대로임. 내가 고른 답이 나열되어 있음 */}
              {/* {userAnswer} */}
              <div className="basis-full text-center">
                {/* 실제 개수보다 작다면 문제가 나오게 되며, 그게 아니라면 결과가 나오게됨 */}
                {
                  current < quizList.length 
                  ?

                  <> 
                  <h4 className="font-bold text-indigo-500 sm:text-2xl lg:text-3xl text-xl mb-5 bg-white rounded-lg p-5 border">{userName}님 반갑습니다</h4>
                  {/* 0901-1 */}
                  <div className="w-full h-5 bg-gray-50 rounded-full mb-5 relative">
                    <div className="absolute h-full bg-green-500 left-0 top-0 rounded-full transition-all duration-1000" style={{width: `${currentPer}%`}} >
                    <p className='absolute right-0 top-0 text-black font-bold'>{currentPer}%</p>
                    </div>
                  </div>
                  {/* 퀴즈를 시작하면 문제를 풀 때마다 게이지바가 차게됨 */}
                  <div className="flex flex-wrap justify-between p-5 border rounded-lg bg-white">
                    <p>{quizList[current].question}</p>
                    <span>{current +1} / {quizList.length}문제</span>
                  </div>
                  <div className="flex flex-wrap justify-between border rounded-lg bg-white mt-5">
                    <ul className='text-center basis-full'>
                      <li className="border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between  "onClick={()=>{setCurrent(current+1); 
                      setUserAnswer(quizList[current].view.number1)} }>
                        <span className="border-r basis-1/12">1번</span>
                        <span className='basis-11/12'>{quizList[current].view.number1}</span>
                      </li>
                      <li className="border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between" onClick={()=>{setCurrent(current+1); 
                      setUserAnswer(quizList[current].view.number2)} }>
                        <span className="border-r basis-1/12">2번</span>
                        <span className='basis-11/12'>{quizList[current].view.number2}</span>
                      </li>
                      <li className="border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between" onClick={()=>{setCurrent(current+1); 
                      setUserAnswer(quizList[current].view.number3)} }>
                        <span className="border-r basis-1/12">3번</span>
                        <span className='basis-11/12'>{quizList[current].view.number3}</span>
                      </li>
                      <li className="py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between" onClick={()=>{setCurrent(current+1); 
                      setUserAnswer(quizList[current].view.number4)} }>
                        <span className="border-r basis-1/12">4번</span>
                        <span className='basis-11/12'>{quizList[current].view.number4}</span>
                      </li>
                    </ul>
                  </div>
                  </>
                  //   <span onClick={()=>{
                  //   alert("확인") 
                  //   //함수를 직접 onclick 이벤트에 만들어줌 -> 문제진행중을 클릭하면 확인이라는 알림창이 뜨게 됨
                  //   setCurrent(current+1)
                  //   //어제 배운 내용이 증감을 할려면 원래 변수에 +1 한것을 변경하려는 함수에 저장해줘야함
                  // }}>문제 진행중 {current}</span>
                  
                  : 
                  <>
      
                    <div>
                    <p className='text-lg'>총 <span className="font-bold text-indigo-500 text-xl">{quizList.length}</span>문제 중   
                    <span className='font-bold text-indigo-500 text-xl'>{_score}</span>문제를 맞추셨으며, 점수는 
                    <span className="text-indigo-500 font-bold text-xl">{Math.floor((_score /quizList.length)*100)}
                    </span>점 입니다.</p>
                    <p className="flex items-center mt-4">
                      정답맞춤: <span className="bg-red-500 w-5 h-5 block mr-5 ml-2"></span>
                      선택한답: <span className="bg-indigo-500 w-5 h-5 block mr-5 ml-2"></span>
                      오답일경우정답: <span className="bg-indigo-300 w-5 h-5 block mr-5 ml-2"></span>
                    </p>
                    </div>
                    
                    {
                      quizList.map((e,i)=>{
                        return(
                          <ul key={i} className='mt-5 bg-white rounded-2xl'>
                              <li className='flex justify-between flex-wrap'>
                                  <p className="bg-gray-50 font-bold basis-full border text-base py-4 rounded-lg">{e.question}</p>
                                  {
                                    Object.entries(e.view).map((el,index)=>{
                                      return (
                                        //반복문을 적게되면 무조건 키값을 적어야지 오류가 안남
                                        <p key={index}className={`font-bold mt-5 basis-[49.5%] border text-base py-4 rounded-lg ${e.answer === el[1] &&userAnswer[i]===e.answer ?'bg-orange-500' : e.answer === el[1] ? 'bg-indigo-300' : el[1] === userAnswer[i] && 'bg-indigo-500'}`}>{el[1]}</p>
                                        //el[0]-> key 값이고,  el[1]-> value 값
                                        //조건문 다시 복습하기
                                        //클래스에서 조건문을 적을 수 있는 장점이 있음 
                                      )
                                    })
                                  }
                              </li>
                          </ul>
                        )
                      })
                    }
                     {/* 
                      내가 한거  
                      <ul>
                      <li>{quizQuestion[0]}
                      <p>{quizView[0]}</p>
                        
                      </li>
                      <li>{quizQuestion[1]}
                      <p>{quizView[1]}</p>
                      </li>
                      <li>{quizQuestion[2]}
                      <p>{quizView[2]}</p>
                      </li>
                      <li>{quizQuestion[3]}
                      <p>{quizView[3]}</p>
                      </li>
                    </ul>   */}
                    
                  </>
                }
              </div>
          </div>
        </div>
    </>
  )
}

export default Detail