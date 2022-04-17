function loadQuiz(){
    let x = "";
    const quiz = {
        Q1: {stem: "Which of the following is used for style? ", choices:["js", "css", "html", "php"]},
        Q2: {stem: "Capital of Pakistan? ", choices:["Karachi", "Lahore", "Islamabad", "Peshawar"]},
        Q3: {stem: "National Poet? ", choices:["Quid-e-Azam", "Alama Iqbal", "Bhutto", "Imran"]},
        Q4: {stem: "Prime Minister of Pakistan? ", choices:["Nawaz", "Shahbaz", "Imran", "Bilawal"]},
        Q5: {stem: "Capital of India? ", choices:["Mumbai", "New Delhi", "Gowa", "Luckhnow"]}
    }
    x += "<form>"
    for(let i in quiz){
        x += "<div> <p>" + i + " " + quiz[i].stem +"</p>";
        for(let ch of quiz[i].choices){
            x += '<input type="radio" id= "' + ch + '" name= "' + i + '" value=' + ch + '></input>';
            x += "<label for=" + ch +">" + ch + "</label><br>";
        }
        
        x += "</div>";      
    }
    x += "<br>" + "<input type = button value = Evaluate>" + "</form>";

    document.getElementById("id01").innerHTML = x;
}