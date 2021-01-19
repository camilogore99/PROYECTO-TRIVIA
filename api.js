//========VARIABLES GLOBALES PARA LA COMPARACION DE LOS DATOS =========
let contquestion = 0;
let arrayResponse = [];
let corrects = [];
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
      data.results.forEach((element,index) => {
            //=======OBTENGO LAS PREGUNTAS CORRECTAS PARA LA COMPARACION ============
            const getQuestionCorrect = element.correct_answer
            corrects.push(getQuestionCorrect)
            //=======GENERO LOS CARDS PARA LAS PREGUNTAS CON SUS RESPUESTAS =========
            html += `<div class="col-md-8 center mt-3">
                                 <div class="card backgro h-100">
                                        <div class="card-body">
                                             ${element.question}
                                             ${htmlAnswers(element.correct_answer,element.incorrect_answers[0],element.incorrect_answers[1],element.incorrect_answers[2],index)}
                                      </div>
                              </div>
                         </div>` ;
       });       
       //========== GENERAR EL BOTON PARA ENVIAR LAS RESPUESTAS ============
       let html2 = `
       <button type="submit" onclick='getAswer()' class="btn btn-primary styl2">Enviar Respuestas </button>`;
       //======= IMPRIMIR LOS DATOS EN EL HTML ============================
      buttonQues.innerHTML = html2;
      containerData.innerHTML = html;
}
function htmlAnswers(correct,incorrect1,incorrect2,incorrect3,index) {
      let typequestion = document.getElementById("select-type").value;
       //=========GENERAR LAS RESPUESTAS DE MANERA DINAMICA =================
       let arrayresponde = [];
       arrayresponde.push(correct,incorrect1,incorrect2,incorrect3);
      // ====MOSTRAR MIS PREGUNTAS  EN LA PAGINA=============
       let html3 = ``;
             array1 = arrayresponde.sort(function() {return Math.random() - 0.5});
             for (let i = 0; i < arrayresponde.length; i++) {
                    if (typequestion ==="multiple") { 
                              html3 += `<div class="form-check">
                                      <input required class="form-check-input" value='${arrayresponde[0]}' type="radio" name='${correct}' id='${arrayresponde[0]}'>
                                       <label class="form-check-label" for='${arrayresponde[0]}'>
                                          ${arrayresponde[0]}
                                       </label>
                                    </div>
                                    <div class="form-check">
                                      <input required class="form-check-input" value='${arrayresponde[1]}' type="radio" name='${correct}' id='${arrayresponde[1]}'>
                                       <label class="form-check-label" for='${arrayresponde[1]}'>
                                          ${arrayresponde[1]}
                                       </label>
                                    </div>
                                    <div class="form-check">      
                                      <input required class="form-check-input" value='${arrayresponde[2]}' type="radio" name='${correct}' id='${arrayresponde[2]}'>
                                       <label class="form-check-label" for='${arrayresponde[2]}'>
                                          ${arrayresponde[2]}
                                       </label>
                                    </div>
                                    <div class="form-check">
                                      <input required class="form-check-input" value='${arrayresponde[3]}' type="radio" name='${correct}' id='${arrayresponde[3]}'>
                                       <label class="form-check-label" for='${arrayresponde[3]}'>
                                          ${arrayresponde[3]}
                                       </label>
                                    </div>
                                     `;
                    } else {
                          //=======GENERO LAS RESPUESTAS DE TRUE O FALSE=============
                         html3 += `<div class="form-check">
                                      <input required class="form-check-input" value='${[0][index]}' type="radio" name='${correct}' id='${[0][index]}'>
                                       <label class="form-check-label" for='${[0][index]}'>
                                          ${arrayresponde[0]}
                                       </label>
                                    </div>
                                    <div class="form-check">
                                      <input required class="form-check-input" value='${[1][index]}' type="radio" name='${correct}' id='${[1][index]}'>
                                       <label class="form-check-label" for='${[1][index]}'>
                                           ${arrayresponde[1]}
                                       </label>
                                    </div>
                                     `;       
      }
      return html3;
  }
}
function getAswer() {
      //======= RECIBO LOS INOUTS DE LAS RESOUESTAS QUE SELECCIONO ===========
      let inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
            if (input.checked) {
                  arrayResponse.push(input.value);
            }
      })
//=======COMPARO LAS PREGUNTAS CORRECTAS ==========
     for (let i = 0; i < arrayResponse.length; i++) {
            for (let x = 0; x < corrects.length; x++) {
                  if (arrayResponse[i] === corrects[x]) {
                        contquestion += 1;
                  }
            }
     }
     printCardResponse();
}
function printCardResponse() {
      //=======IMPRIMO LAS RESPUESTAS QUE SACO CORRECTAS =========
      let printCard = document.getElementById("card-result");
      let html = ``;
      html += `<div class="result-card">
                         <div class="row justify-content-center hola">
                             <div class="col-md-5 center ">
                                <div class="card" style="width: 18rem;">
                                      <div class="card-body">
                                           <h2 class="card-title">TU RESULTADO </h5>
                                           <h4 class="card-subtitle mb-2 text-muted">Tu Porcentaje Es= ${(contquestion/100)}</h6>
                                           <p class="card-text ">total =${contquestion}${"/"}$${arrayResponse.length}</p>
                                      </div>
                                </div>
                          </div>
                      </div>
                  </div>`;
                  printCard.innerHTML = html
                  //location.reload() 
                  return html
}
getCategories();