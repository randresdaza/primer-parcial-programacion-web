document.addEventListener('DOMContentLoaded', ConsultarDatos());

function ArmarJSON() {
    /* Sacar los Valores de HTML accediendo al DOM. */
    var nombre = document.getElementById("txtMateria").value;
    var quiz = document.getElementById("txtQuiz").value;
    var pQuiz = document.getElementById("pQuiz").value;
    var taller = document.getElementById("txtTaller").value;
    var pTaller = document.getElementById("pTaller").value;
    var practico = document.getElementById("txtPractico").value;
    var pPractico = document.getElementById("pPractico").value;
    var teorico = document.getElementById("txtTeorico").value;
    var pTeorico = document.getElementById("pTeorico").value;
    var definitiva1 = CalcularCorte1(quiz, pQuiz, taller, pTaller, teorico, pTeorico, practico, pPractico);

    var quiz2 = document.getElementById("txtQuiz2").value;
    var pQuiz2 = document.getElementById("pQuiz2").value;
    var taller2 = document.getElementById("txtTaller2").value;
    var pTaller2 = document.getElementById("pTaller2").value;
    var practico2 = document.getElementById("txtPractico2").value;
    var pPractico2 = document.getElementById("pPractico2").value;
    var teorico2 = document.getElementById("txtTeorico2").value;
    var pTeorico2 = document.getElementById("pTeorico2").value;
    var definitiva2 = CalcularCorte2(quiz2, pQuiz2, taller2, pTaller2, teorico2, pTeorico2, practico2, pPractico2);

    var quiz3 = document.getElementById("txtQuiz3").value;
    var pQuiz3 = document.getElementById("pQuiz3").value;
    var taller3 = document.getElementById("txtTaller3").value;
    var pTaller3 = document.getElementById("pTaller3").value;
    var practico3 = document.getElementById("txtPractico3").value;
    var pPractico3 = document.getElementById("pPractico3").value;
    var teorico3 = document.getElementById("txtTeorico3").value;
    var pTeorico3 = document.getElementById("pTeorico3").value;
    var definitiva3 = CalcularCorte3(quiz3, pQuiz3, taller3, pTaller3, teorico3, pTeorico3, practico3, pPractico3);

    var promedio = CalcularPromedio(definitiva1,definitiva2,definitiva3);

    /* Armar un JSON con los datos de la Materia*/
    var materia = {
        "Materia": nombre,
        "Definitiva1": definitiva1,
        "Definitiva2": definitiva2,
        "Definitiva3": definitiva3,
        "Promedio": promedio,
    }
    return materia;
}

function CalcularPromedio(definitiva1,definitiva2,definitiva3){
    var promedio = 0;
    promedio = ((definitiva1*0.3)+(definitiva2*0.3)+(definitiva3*0.4));
    return promedio;
}

function CalcularDefinitiva1() {
    let notas1 = [];
    var corte1 = ArmarJSON();
}

function CalcularCorte1(quiz, pQuiz, taller, pTaller, practico, pPractico, teorico, pTeorico) {
    var nota = 0;
    var porcentajes = 0;
    porcentajes = (parseInt(pQuiz) + parseInt(pTaller) + parseInt(pPractico) + parseInt(pTeorico));
    if (porcentajes === 100) {
        pQuiz = pQuiz / 100;
        pTaller = pTaller / 100;
        pTeorico = pTeorico / 100;
        pPractico = pPractico / 100;
        nota = ((quiz * pQuiz) + (taller * pTaller) + (practico * pPractico) + (teorico * pTeorico));
        document.getElementById("txtDefinitiva1").value = nota;
        return nota;
    } else {
        alert('Por favor compruebe los porcentajes del primer corte');
    }

}

function CalcularDefinitiva2() {
    let notas2 = [];
    var corte2 = ArmarJSON();
}

function CalcularCorte2(quiz2, pQuiz2, taller2, pTaller2, practico2, pPractico2, teorico2, pTeorico2) {
    var nota2 = 0;
    var porcentajes2 = 0;
    porcentajes2 = (parseInt(pQuiz2) + parseInt(pTaller2) + parseInt(pPractico2) + parseInt(pTeorico2));
    if (porcentajes2 === 100) {
        pQuiz2 = pQuiz2 / 100;
        pTaller2 = pTaller2 / 100;
        pTeorico2 = pTeorico2 / 100;
        pPractico2 = pPractico2 / 100;
        nota2 = ((quiz2 * pQuiz2) + (taller2 * pTaller2) + (practico2 * pPractico2) + (teorico2 * pTeorico2));
        document.getElementById("txtDefinitiva2").value = nota2;
        return nota2;
    } else {
        alert('Por favor compruebe los porcentajes del segundo corte');
    }

}

function CalcularDefinitiva3() {
    let notas3 = [];
    var corte3 = ArmarJSON();
}

function CalcularCorte3(quiz3, pQuiz3, taller3, pTaller3, practico3, pPractico3, teorico3, pTeorico3) {
    var nota3 = 0;
    var porcentajes3 = 0;
    porcentajes3 = (parseInt(pQuiz3) + parseInt(pTaller3) + parseInt(pPractico3) + parseInt(pTeorico3));
    if (porcentajes3 === 100) {
        pQuiz3 = pQuiz3 / 100;
        pTaller3 = pTaller3 / 100;
        pTeorico3 = pTeorico3 / 100;
        pPractico3 = pPractico3 / 100;
        nota3 = ((quiz3 * pQuiz3) + (taller3 * pTaller3) + (practico3 * pPractico3) + (teorico3 * pTeorico3));
        document.getElementById("txtDefinitiva3").value = nota3;
        return nota3;
    } else {
        alert('Por favor compruebe los porcentajes del tercer corte');
    }

}

function GuardarDefinitiva(nota) {
    let materias = [];/* Array de materias este servira para hacer una copia de los datos del LocalStorage*/
    var nota = ArmarJSON();
    if (localStorage.getItem('Materias') != null) {
        materias = JSON.parse(localStorage.getItem('Materias'));
    }
    materias.push(nota);/* Adicionar la nueva nota al array de materias*/
    localStorage.setItem('Materias', JSON.stringify(materias));
    location.reload();
    ConsultarDatos();
}

function ConsultarDatos() {
    var materias = []; /* Array para sacar los datos a Consultar*/
    if (localStorage.getItem('Materias') != null) {
        materias = JSON.parse(localStorage.getItem('Materias'));
    }
    materias.forEach(function(e,i,a){
        document.getElementById("tMaterias").innerHTML +=`
        <tr>
            <td align="center">${e.Materia}</td>
            <td align="center">${e.Definitiva1}</td> 
            <td align="center">${e.Definitiva2}</td> 
            <td align="center">${e.Definitiva3}</td> 
            <td align="center">${e.Promedio}</td>
            <td align="center"><button id="btnT" onclick="Eliminar(${i})">DELETE</button></td>
        </tr>
        `
    });
}

function Eliminar(indice){
    let materias = JSON.parse(localStorage.getItem("Materias"));
    materias.splice(indice,1);
    localStorage.setItem("Materias",JSON.stringify(materias));
    location.reload();
    ConsultarDatos();
}

                    
/*
function Editar(i3){
    let materias4=JSON.parse(localStorage.getItem("materias"));
    tablaMaterias.innerHTML='';
    tablaMaterias.innerHTML+=`
        <tr>
            <th class="space">Nombre</th>
            <th class="space">Nota Primer Corte</th>
            <th class="space">Operaciones</th>
        </tr>
    `
    for(var i=0;i<materias4.length;i++){
        if(i==i3){
            tablaMaterias.innerHTML+=`
                <tr>
                    <td class="space">
                    <input id="nuevoNombre" placeholder="${materias4[i]}">
                    <td class="space">${materias4[i+1]}</td>
                    </input>
                    </td>
                    <td class="space">
                        <button Onclick="Editar2(${i})">Editar</button>
                        <button Onclick="Pintar()">Cancelar</button>
                    </td>
                </tr>
            `
            i++;
        }else{
            tablaMaterias.innerHTML+=`
            <tr>
                <td class="space">${materia2[i]}</td>
                <td class="space">${materia2[i+1]}</td>
                <td class="space">
                    <button Onclick="Editar(${i})">Editar</button>
                    <button Onclick="Eliminar(${i})">Eliminar</button>
                </td>
            </tr>
            `
            i++
        }
    }
}

function Editar2(i){
    let materia5 = JSON.parse(localStorage.getItem("materias"));
    materia5[i] = document.getElementById("nuevoNombre").value;
    if(materia5[i]==''){
        alert("Escriba el nuevo nombre de la materia");
    }else{
        localStorage.setItem("materias",JSON.stringify(materia5));
        Pintar();
    }
}

*/
