 //quizDB is a Array and in which there are fore object pass as a array element.

 const quizDB = [
    {
      question:
        "Q1- Which of the following type of variable is visible only within a function where it is defined?",
      a: "global variable",
      b: "local variable",
      c: "Both of the above.",
      d: "None of the above.",
      ans: "ans-2",
    },
    {
      question:
        "Q2- Which built-in method returns the characters in a string beginning at the specified location?",
      a: "substr()",
      b: "getSubstring()",
      c: "slice()",
      d: "None of the above",
      ans: "ans-1",
    },
    {
      question:
        "Q3- Which of the following function of Number object returns the number's value?",
      a: "toString()",
      b: "valueOf()",
      c: "toLocaleString()",
      d: "toPrecision()",
      ans: "ans-2",
    },
    {
      question:
        "Q4- Which of the following function of String object is used to match a regular expression against a string?",
      a: "concat()",
      b: "match()",
      c: "search()",
      d: "replace()",
      ans: "ans-2",
    },
    {
      question:
        "Q5- Which of the following function of Array object joins all elements of an array into a string?",
      a: "concat()",
      b: "join()",
      c: "pop()",
      d: "map()",
      ans: "ans-2",
    },
    {
      question:
        "Q6- Which of the following function of Array object adds and/or removes elements from an array?",
      a: "toSource()",
      b: "sort()",
      c: "splice()",
      d: "unshift()",
      ans: "ans-3",
    },
    {
      question: "Q7- What are variables used for in JavaScript Programs?",
      a: "Storing numbers, dates, or other values",
      b: "Varying randomly",
      c: "Causing high-school algebra flashbacks",
      d: "None of the above",
      ans: "ans-1",
    },
    {
      question: "Q8- Which of the following is not JavaScript Data Types?",
      a: "Undefined",
      b: "Number",
      c: "Boolean",
      d: "Float",
      ans: "ans-4",
    },
    {
      question: "Q9- Which company developed JavaScript?",
      a: "Netscape",
      b: "Bell Labs",
      c: "Sun Microsystems",
      d: "IBM",
      ans: "ans-1",
    },
    {
      question:
        "Q10- Which of the following is correct about features of JavaScript?",
      a: "It can not Handling dates and time.",
      b: "JavaScript is a object-based scripting language.",
      c: "JavaScript is not interpreter based scripting language.",
      d: "All of the above",
      ans: "ans-2",
    },
  ];

  const Questions = document.querySelector(".question");
  const Option1 = document.querySelector("#option-1");
  const Option2 = document.querySelector("#option-2");
  const Option3 = document.querySelector("#option-3");
  const Option4 = document.querySelector("#option-4");
  const Submit = document.querySelector("#submit");

  const questionNo = document.querySelector(".Q-No");

  const Answers = document.querySelectorAll(".answer");

  let questionCount = 0; //indexNo
  let score = 0;

  const loadQuestion = () => {
    const questionList = quizDB[questionCount]; // arrayname[indexNo]

    Questions.innerHTML = questionList.question; //.objectname

    questionNo.innerHTML = `${questionCount + 1} / 10`; // add 1+ because questionCount is indexNo that is start from 0 and I wanted Q-no that should be start from 1.

    Option1.innerHTML = questionList.a;
    Option2.innerHTML = questionList.b;
    Option3.innerHTML = questionList.c;
    Option4.innerHTML = questionList.d;
  };

  loadQuestion();

  const getCheckAnswer = () => {
    let answer;

    Answers.forEach((curElemAns) => {
      if (curElemAns.checked) {
        answer = curElemAns.id;
      }
    });

    return answer;
  };

  Submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer(); //you can call a function in both way, here checkedAnswer is only a variable that store the value of the function.
    console.log(checkedAnswer);

    // console.log(getCheckAnswer())

    if (checkedAnswer === quizDB[questionCount].ans) {
      score++;
    } else {
      score === 0; // Why not use = sign because = sign would store the 0 value in score variable and continusly give 0 value.
    }

    questionCount++;

    const deSelectAll = () => {
      Answers.forEach((curElemAns) => (curElemAns.checked = false)); // checked - false
    };

    deSelectAll();

    if (questionCount < quizDB.length) {
      // quizDB.length means array length from 1 to 4 and questionCount take elements based on index no from 0 to 3.
      loadQuestion();
    } else {
      Submit.innerHTML = "Try Again?";
      Submit.addEventListener("click", () => {
        location.reload();
      });
      const RemoveAll = document.querySelector(".OnlyRemove");
      RemoveAll.remove(); // remove-html element
      Result = document.getElementById("result");
      Result.innerHTML = `Your total score is ${score} Out of 10 👻!`;
    }
  });