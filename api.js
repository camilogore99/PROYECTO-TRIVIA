let hola22 = false;
function getCategories() {
      //============OBTENGO LAS CATEGORIAS DE MI API =============
      const url = `https://opentdb.com/api_category.php`;
      fetch(url)
            .then((response) => response.json())
            .then((data) => printCategories(data.trivia_categories));
}
function printCategories(categories) {
      //========== GENERO TODAS LAS CATEGORIAS DE MI API =====================
      let categoriesContainer = document.getElementById("select-category");
      categories.forEach((category) => {
            categoriesContainer.innerHTML += `<option value="${category.id}">${category.name}</option>`;
      });
}
function getQuestion() {
      //============ OBTENER LOS DATOS DEL VALUE PARA GENERAR LAS PREGUNTAS ==========
      let totalQuestion = document.getElementById("total-question").value;
      let totalCategories = document.getElementById("select-category").value;
      let totalDifficulty = document.getElementById("select-difficulty").value;
      let type = document.getElementById("select-type").value;
      //=========MANDO A TRAER LOS DATOS DE LA APII===============
      const url = `https://opentdb.com/api.php?amount=${totalQuestion}&category=${totalCategories}&difficulty=${totalDifficulty}&type=${type}`;
      fetch(url)
            .then((response) => response.json())
            .then((data) => printData(data));
}
function printData(data) {
      // ================ obtener donde quiero poner los datos =================== 
      let containerData = document.getElementById("question-container");
      let buttonQues = document.getElementById("button-question");
      //=================== GENERAR LOS DATOS================
      let html = ``;
      data.results.forEach((element) => {
            html += `<div class="col-md-8 center mt-3">
                                 <div class="card backgro h-100">
                                        <div class="card-body">
                                             ${element.question}
                                             ${htmlAnswers(element.correct_answer,element.incorrect_answers[0],element.incorrect_answers[1],element.incorrect_answers[2])}
                                      </div>
                              </div>
                         </div>` ;
       });       
       //========== GENERAR EL BOTON PARA ENVIAR LAS RESPUESTAS ============
       let html2 = `
       <button type="submit" onclick='getAswer(${(JSON.stringify(data.results))})' class="btn btn-primary styl2">Enviar Respuestas </button>`;
      //  console.log(JSON.stringify(data))
       //======= IMPRIMIR LOS DATOS EN EL HTML ============================
      buttonQues.innerHTML = html2;
      containerData.innerHTML = html;
      getAswer(data.results);
      console.log(data.results)
      hola22 = true;
}
function htmlAnswers(correct,incorrect1,incorrect2,incorrect3) {
             //=========GENERAR LAS RESPUESTAS DE MANERA DINAMICA =================
             let arrayresponde = [];
             arrayresponde.push(correct,incorrect1,incorrect2,incorrect3);
           // ====MOSTRAR MIS PREGUNTAS  EN LA PAGINA=============
            array1 = arrayresponde.sort(function() {return Math.random() - 0.5});
            let html3 = ``;
            for (let i = 0; i < arrayresponde.length; i++) {
                  html3 += `<div class="form-check">
                                      <input required class="form-check-input" value='${arrayresponde[i]}' type="radio" name='${correct}' id='${arrayresponde[i]}'>
                                       <label class="form-check-label" for='${arrayresponde[i]}'>
                                          ${arrayresponde[i]}
                                       </label>
                                    </div>
                                     `;
            }
            return html3;
}
function getAswer(data) {
      // JSON.parse(data.results)
       console.log(data);
      let contquestion = 0;
      let arrayResponseCorrect = [];
      let arrayResponse = [];
      let inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
            if (input.checked) {
                  arrayResponse.push(input.value);
            }
      })
      //console.log(arrayResponse)
      for (let i = 0; i < data.length; i++) {
            arrayResponseCorrect.push(data[i].correct_answer)
            console.log("===============")
            console.log(arrayResponseCorrect);
      }
      for (let x = 0; x < arrayResponseCorrect.length; x++) {
            if (arrayResponseCorrect[x] === arrayResponse[x] ) {
                  contquestion += 1;
            }
            if (x=== (arrayResponseCorrect.length-1) && hola22) {
                  alert("sacaste" +contquestion+"/"+arrayResponse.length);
            }
      }
      //alert("sacaste" +arrayResponse.length+"/"+contquestion);
}
getCategories();