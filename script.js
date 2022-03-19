
var questions = [
    {
        question: '1. What are variables used for in JavaScript programs?',
        choice1: 'Storing numbers, dates, or other values',
        choice2: 'Varying randomly',
        choice3: 'Algebra',
        choice4: 'None of the above',
        answer: 1,
      },
    
      {
        question: '2. ______ JavaScript statements embedded in the HTML page can respond to user events such as mouse clicks, form imput, and page navigation.',
        choice1: 'Client-side',
        choice2: 'Server-side',
        choice3: 'Local',
        choice4: 'Native',
        answer: 1,
      },

      {
        question: '3. What should appear at the very end of this tag? <script src= "">',
        choice1: '<script>',
        choice2: 'End statement',
        choice3: '</script>',
        choice4: 'None of the above',
        answer: 2,
      },

      {
        question: '4. Which of the following can NOT be done with client-side JavaScript?',
        choice1: 'Sending form contents by email',
        choice2: 'Validating a form',
        choice3: 'Storing form contents to a database on server',
        choice4: 'None of the above',
        answer: 3,
      },

      {
        question: '5. Which is a capability of CSS?',
        choice1: 'Return a value',
        choice2: 'Accept parameters',
        choice3: 'Accept parameters AND return a value',
        choice4: 'None of the above',
        answer:  3,
      },

      {
        question: '6. Which is not a valid JavaScript variable name?',
        choice1: '2names',
        choice2: '_first_and_last_names',
        choice3: 'FirstandLast',
        choice4: 'twonames',
        answer: 1,
      },

      {
        question: '7. ______ tag is an extension to HTML that can enclose any number of JavaScript statements??',
        choice1: '<body>',
        choice2: '<style>',
        choice3: '<script>',
        choice4: '<title>',
        answer: 2,
      },

      {
        question: '8. Correct syntax for "Hello World?"',
        choice1: 'System.out.printIn ("")',
        choice2: 'document.write',
        choice3: 'printIn ("")',
        choice4: 'response.write("")',
        answer: 2,
      },

      {
        question: '9. What is the correct way to write an array?',
        choice1: 'var txt= new Array (1:"", 2: "", 3:"")',
        choice2: 'var txt= new Array (1= (""), 2=(""), 3= ("") var txt=new',
        choice3: 'var txt= new Array ("","","")' ,
        choice4: 'var txt new Array "", "",""',
        answer: 4,
      },

      {
        question: '10. Choose client-side object?',
        choice1: 'FileUpload',
        choice2: 'Function',
        choice3: 'File',
        choice4: 'Date',
        answer: 4,
      }, 
    ]

    var score= 0;
    var currentQuestion = -1;
    var timeLeft= 0;
    var timer;
    
    function begin() {
      timeLeft =75;
      document.getElementById("timeLeft").innerHTML = timeLeft;
    
      timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <=0){
          clearInterval(timer);
          endGame();
        }
      },1000);
      
      next();
    }

    function endGame () {
      clearInterval(timer);
    }

   


   