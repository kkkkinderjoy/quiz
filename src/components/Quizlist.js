// json 데이터로 배열값 넘김
const QuizList=[
    {
        id:1, 
        question:"아래 요소 중 인라인 요소인 것을 고르세요.", 
        answer:"<a>",
        view:{
            number1:"<div>",
            number2:"<p>",
            number3:"<ul>",
            number4:"<a>"
            },
        hint: "블럭요소에는 <div>가 있습니다.",
        type:"html"
    },
    {
        id:2,
        question:"img 태그의 속성은 무엇인지 아래에서 고르세요", 
        answer:"src",
        view:{
            number1:"url",
            number2:"source",
            number3:"src",
            number4:"href"
            },
        hint:"힌트없음",
        type:"html"
    },
    { 
        id:3, 
        question:"a 태그의 속성은 무엇인지 아래에서 고르세요", 
        answer:"href",
        view:{
            number1:"url",
            number2:"source",
            number3:"src",
            number4:"href"
            },
        hint:"힌트없음",
        type:"html"
    },
    {
        id:4,
        question:"CSS는 무엇을 의미하나요?",
        answer:"Computer Style Sheets",
        view:{
            number1:"Computer Style Sheets",
            number2:"Cascading Style Sheets",
            number3:"Creative Style Sheets",
            nubmer4:"Colorful Style Sheets"
             },
        hint:"",
        type:"css"
    },
    {
        id:5,
        question:"아래 중에서 올바른 CSS 구문은 무엇인가요? ",
        answer:"body{color:black;}",
        view:{
            number1:"{body:color=black;}",
            number2:"body:color=black;",
            number3:"{body;color:black;}",
            number4:"body{color:black;}"
        },
        hint:"",
        type:"css"
    },
    {
        id:6,
        question:"아래 중에서 CSS 파일에 주석을 올바르게 삽입한것을 고르세요.",
        answer:"/*this is a comment*/",
        view:{
            number1:"'this is a comment'",
            number2:"/*this is a comment*/",
            number3:"//this is a comment",
            number4:"//this is a comment//"
        },
        hint:"",
        type:"css"
    },
    {
        id:7,
        question:"어떤 HTML 요소 안에 JavaScript를 넣나요?",
        answer:"",
        view:{
            number1:"<javascript>",
            number2:"<js>",
            number3:"<scripting>",
            number4:"<script>"
        },
        hint:"",
        type:"js"
    },
    {
        id:8,
        question:"'xxx.js'라는 외부 스크립트를 참조하는 올바른 구문은 무엇인가요?",
        answer:"<script src='xxx.js'>",
        view:{
            number1:"<script src='xxx.js'>",
            number2:"<script href='xxx.js'>",
            number3:"<script name='xxx.js'>",
            number4:"<script source='xxx.js'>"
        },
        hint:"",
        type:"js"
    },  
    {
        id:9,
        question:"'i'가 5가 아닌 경우 일부 코드를 실행하기 위한 IF 문을 작성하는 방법은 무엇입니까?",
        answer:"if(i!=5)",
        view:{
            number1:"if i<>5",
            number2:"if i=!5 then",
            number3:"if(i!=5)",
            number4:"if (i<>5)"
        },
        hint:"",
        type:"js"
    }  

    
]

export default QuizList;