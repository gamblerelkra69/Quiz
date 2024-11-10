const questionEl = document.querySelector(".question");
const result = document.querySelector(".result");
const choiceEl = document.querySelector(".choice")
const nextBtn = document.querySelector('.next')
let quizData = [
	{
		"question": "If you gamble what happen to your mind?",
		"choice":["Addict","Win this mothafatha","Ok its last one","Fck this game"],
		"answer":"Fck this game",
	},
	{
		"question": "Who is the greatest khan in Mongolia?",
		"choice":["Khublai khan","Temuujin khan","Your Mama","Khurelsuh"],
		"answer":"Temuujin khan",
	},
	{
		"question": "Goat footballer?",
		"choice":["iShowSpeed","Messi","Ronaldo","Mbappe"],
		"answer":"Ronaldo",
	},
	{
		"question": "Goat rapper?",
		"choice":["Eminem","IceCube","snoopDogg","Dr.Dre"],
		"answer":"Eminem",
	},
];
let now=0;
let count=0;
console.log(quizData[0].question);
function display(){
	questionEl.innerText = quizData[now].question;
	quizData[now].choice.forEach(data=>{
		console.log(data);
		let btn = document.createElement('button')
		btn.innerText = data;
		console.log(btn);
		choiceEl.append(btn);
		btn.addEventListener('click',()=> checkAnswer(data));
	});
}
function checkAnswer(data){
	console.log(data);
	if(data==quizData[now].answer){
		result.innerText='Correct'
		count++;
	}else{
		result.innerText="Wrong! Answer is "+ quizData[now].answer;
	}
}
nextBtn.addEventListener('click',()=>{
	questionEl.innerText="";
	result.innerText='';
	choiceEl.innerHTML='';
	now++;
	if(now==quizData.length){
		result.innerText='Done! Your score is '+ count + "/" + quizData.length;
		nextBtn.style.display="none";
	}else{
		display();
	}
})
display();
