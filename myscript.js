const quiz = {
    Q1: {stem: "Which of the following is used for style? ", choices:["js", "css", "html", "php"]},
    Q2: {stem: "Capital of Pakistan? ", choices:["Karachi", "Lahore", "Islamabad", "Peshawar"]},
    Q3: {stem: "National Poet? ", choices:["Quid-e-Azam", "Iqbal", "Bhutto", "Imran"]},
    Q4: {stem: "Prime Minister of Pakistan? ", choices:["Nawaz", "Shahbaz", "Imran", "Bilawal"]},
    Q5: {stem: "Capital of India? ", choices:["Mumbai", "Delhi", "Gowa", "Luckhnow"]}
}

const answers = ['css',"Islamabad","Iqbal","Shahbaz","Delhi"];


function loadQuiz(){
    let x = "";
    x += "<form>"
    for(let i in quiz){
        x += "<div> <p>" + i + " " + quiz[i].stem +"</p>";
        for(let ch of quiz[i].choices){
            x += '<input type="radio" id= "' + ch + '" name= "' + i + '" value=' + ch + '></input>';
            x += "<label for=" + ch +">" + ch + "</label><br>";
        }
        
        x += "</div><br>";      
    }
    x += "<br>" + "<input type = button value = Evaluate id = btnEval>" + "</form>";

    const div1 = document.getElementById("id01");
    div1.innerHTML = x;
}

// Event delegation: Event Listener is added to one parent which analyze bubbled events to find
// a match on child events

document.addEventListener('click',function(e){
    let predictions = [];
    let score = 0;
    if(e.target && e.target.id== 'btnEval'){
        // do something
        for(let q in quiz){
            let elements = document.getElementsByName(q);
            let flag = false;
            for(let elem of elements){
                if (elem.checked) {
                    predictions.push(elem.value);
                    flag = true;
                    break;  
                } 
            }
            if(!flag){
                predictions.push("Not-Selected");
            }
        }
        // calculating score
        for(let i=0; i < answers.length; i++){
            if(answers[i] === predictions[i]){
                score++;
            }
        }

        // removing result div and appending again to show animation
        let rdiv = document.getElementById("result");
        if (rdiv){
            rdiv.remove();
        }
        const div1 = document.getElementById("id01");
        rdiv = document.createElement('div');
        rdiv.id = 'result';
        rdiv.innerHTML = "Your score is " + score + " out of 5";
        div1.appendChild(rdiv);
     }
 })

