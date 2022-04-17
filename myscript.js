function loadQuiz(){
    let x = "";
    const quiz = {
        Q1: {stem: "Which of the following is used for style? ", choices:["js", "css", "html", "php"]},
        Q2: {stem: "Capital of Pakistan? ", choices:["Karachi", "Lahore", "Islamabad", "Peshawar"]},
        Q3: {stem: "National Poet? ", choices:["Quid-e-Azam", "Alama Iqbal", "Bhutto", "Imran"]},
        Q4: {stem: "Prime Minister of Pakistan? ", choices:["Nawaz", "Shahbaz", "Imran", "Bilawal"]},
        Q5: {stem: "Capital of India? ", choices:["Mumbai", "New Delhi", "Gowa", "Luckhnow"]}
    }

    for(let i in quiz){
        x += "<div>" + i + " " + quiz[i].stem +"<br>" + "<ul>"
        for(let ch of quiz[i].choices){
            x += "<li>" + ch + "</li>";
        }
        
        x += "</ul> </div>";


        "<label for=" + i +">" + quiz[i].stem + "</label><br>"
    }

    document.getElementById("id01").innerHTML = x;
}



{/* <form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form> */}