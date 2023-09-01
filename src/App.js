import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';

function App() {
  
  
  const [userName, setUserName] = useState("홍윤정");
  const [quizList, setQuizList] = useState(QuizList);
  const [selected, setSelected]= useState(4);

  //0901-1
  const[quizCnt, setQuizCnt] = useState(QuizList.length);
  const[typeTxt, setTypetxt] = useState("전체");
  
  
  const quiz =[...QuizList] //원본인 QuizList를 복사(quizList 아님)
  const ChangeEvent = (data) =>{ //클릭하는 내용을 한번에 같이 적기 위해 switch문 이용함
   const classValue = data.target.className;
   const dataValue = data.target.value;
  //  console.log(classValue) -> 콘솔창에 이름을 입력하거나 랜덤설정,갯수설정,문제유형을 변경하면 classsName이 뜨는것을 확인하기 위해
  //  console.log(dataValue)
  
    switch(true){
      // includes("값") -> 해당 문자열이 있는지 체크
      case classValue.includes("name") : //input className ="name" 이 있을때 
      // console.log("이름값이 바뀜") -> 콘솔창에 이름값이 바뀜이라고 뜨는것을 확인하고 아래 내용을 넣어주기
      setUserName(dataValue) //setUserName에 dataValue 값을 넣어야함
      break;
      case classValue.includes("random") : 
      //랜덤은 배열을 초기화 하지 않으면 원래있던 배열에 더 추가되어서 들어감 -> 배열을 무조건 초기화 해야함
        console.log(dataValue)
        (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{return Math.random() - 0.5}).slice(0,selected)
        ) 
        : setQuizList([...QuizList]).slice(0,selected)) 
        
        //0~1사이의 값을 반환-> 0.5의 평균값을 얻게되어 -0.5 ~ 0.5값으로 랜덤 출력
      break;
      case classValue.includes("cnt") : 
      setSelected(dataValue);
      
      break;
      case classValue.includes("type") : 
        (dataValue === "전체" //문제유형에서 유형을 다르게 클릭하면 갯수설정이 자동으로 바뀌게 됨
        ? //참
        setQuizList([...QuizList].slice(0,selected))
        : //거짓
        setQuizList([...QuizList].filter((e)=>{
          return e.type === dataValue
        }).slice(0,selected))
        )
        setTypetxt(dataValue)
      break;
      default:
        console.log("데이터가 없습니다")
      
    }
  } 
 //0831-1

  useEffect(()=>{
  //재렌더링(새로고침,라우팅...)될때마다 딜레이가 되고 계속 실행되게 하는거
  //모든게 다 로딩되고 나서 실행됨
  //로딩되고 나서 딱 한번만 실행되게 하려면 ,[] -> 얘를 마지막에 붙여주면됨
  //,[userName] -> userName이 변하면 실행됨
  //재렌더링 되는 대상(quizList) 
  //[]-> 바뀌는것만 실행되게 함 

  //0901-1
    setQuizList([...QuizList].slice(0,selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeTxt ==="전체" ? true : e.type ===typeTxt;
    }).length);
   
  },[typeTxt,selected])
  console.log(quizList)

  

 
  return (

      <Routes>
        <Route path="/" element={<Main ChangeEvent={ChangeEvent} userName={userName} quizList={quizList} quiz={quiz} selected={selected} quizCnt={quizCnt} />} />
        {/* data를 보내기 위해서  */}
        <Route path="/quiz" element={<Detail quizList={quizList} userName={userName} />}/>
      </Routes>
  );
}

export default App;

