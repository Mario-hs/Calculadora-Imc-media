const Modal = {
    open() {
        document.querySelector('.container_modal').classList.add('active')
    }, 
    close() {
        document.querySelector('.container_modal').classList.remove('active')
    }
}

let imc = document.querySelector('#imc')
imc.addEventListener('click', () => {
        let rich = document.querySelector('.rich_modal')
        
        rich.innerHTML = ImcEffect.insertHtml()
           
    }
)

let average = document.querySelector('#average')
average.addEventListener('click', () => {
        let rich = document.querySelector('.rich_modal')

        rich.innerHTML = AverageEffect.insertHtml()
    }
)


const ImcEffect = {

    insertHtml() {
        const html =`
                <div class="data_modal">
                    <h2>IMC</h2>
                    <div class="input_group">
                        <label for="weight">Peso: </label>
                        <input type="number" name="weight" id="weight">
                    </div>
                    <div class="input_group">
                        <label for="height">Altura: </label>
                        <input type="number" name="height" id="height">
                    </div>
                </div>
                <div class="buttons">
                    <input type="button" value="Calcular" id="calc" onclick="ImcEffect.imc()">
                    <input type="button" value="Sair" class="close" onclick="Modal.close()"> 
                </div>
            `
        return html
    
    },

    imc() {
        
        let w = Number(weight.value)
        let h = Number(height.value)

        let answer = Number( w / (h * h) )
        let appendHtml = ImcEffect.answerHtml(answer)

        let btn = document.querySelector('.rich_modal')
        btn.innerHTML += appendHtml

    },

    answerHtml(value){
        let html

        if (value < 18.5){
            html = `
                <div class= "answer">
                    <p>IMC: ${value}</p>
                    <p>Classificação: MAGREZA</p>
                </div>
            `
        }else if (value >= 18.5 && value < 24.9){
            html = `
                 <div class= "answer">
                    <p>IMC: ${value}</p>
                    <p>Classificação: NORMAL</p>
                </div>
            `
        }else if (value >= 25 && value <= 29.9) {
            html = `
                <div class= "answer">
                    <p>IMC: ${value}</p>
                    <p>Classificação: SOBREPESO</p>
                </div>
            `
        }else if (value >= 30 && value <= 39.9) {
            html = `
                <div class= "answer">
                    <p>IMC: ${value}</p>
                    <p>Classificação: OBESIDADE</p>
                </div>
            `
        }else if (value >= 40) {
            html = `
                <div class= "answer">
                    <p>IMC: ${value}</p>
                    <p>Classificação: OBESIDADE GRAVE</p>
                </div>
            `
        }

        return html 

    }
}

const AverageEffect = {

    insertHtml() {
        const html =`
                <div class="data_modal">
                    <h2>Média</h2>
                    <div class="input_group">
                        <label for="note1">Primeira nota: </label>
                        <input type="number" name="noteOne" id="note1">
                    </div>
                    <div class="input_group">
                        <label for="note2">Segunda nota: </label>
                        <input type="number" name="noteTwo" id="note2">
                    </div>
                </div>
                <div class="buttons">
                    <input type="button" value="Calcular" id="calc" onclick="AverageEffect.cont()">
                    <input type="button" value="Sair" class="close" onclick="Modal.close()"> 
                </div>
            `
        return html
    
    },

    cont() {
        
        let n1 = Number(note1.value)
        let n2 = Number(note2.value)

        let answer = Number((n1 + n2) / 2)
        let appendHtml = AverageEffect.answerHtml(answer)

        let btn = document.querySelector('.rich_modal')
        btn.innerHTML += appendHtml
    },

    answerHtml(value){

        const html = `
        <p class="answer"> Média: ${value}</p>
        `
        return html
    }
}

