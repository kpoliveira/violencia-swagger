const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const parser = require('simple-excel-to-json')
const doc = parser.parseXls2Json('data.xlsx')

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Teste de API',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};

const addTodosMunicipios = (value) => {
    const all = []
    console.log(value)
    for (let i = 0; all.length < value; i++) {
        if(doc[0][i].MUNICIPIO != ''){
            all.push(doc[0][i])
        }else{
            i++;
        }
    }
    return all
}

const addAlianca = (value) => {
    const alianca = []
    console.log(value)
    for (let i = 0; alianca.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'ALIANCA'){
            alianca.push(doc[0][i])
        }else{
            i++;
        }
    }
    return alianca
}

const addRecife = (value) => {
    const recife = []

    for (let i = 0; recife.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'RECIFE'){
            recife.push(doc[0][i])
        }else{
            i++;
        }
    }
    return recife
}

const addJaboatao = (value) => {
    const jaboatao = []

    for (let i = 0; jaboatao.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'JABOATAO DOS GUARARAPES'){
            jaboatao.push(doc[0][i])
        }else{
            i++;
        }
    }
    return jaboatao
}

const addOlinda = (value) => {
    const olinda = []

    for (let i = 0; olinda.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'OLINDA'){
            olinda.push(doc[0][i])
        }else{
            i++;
        }
    }
    return olinda
}

const addAbreueLima = (value) => {
    const abreu = []

    for (let i = 0; abreu.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'ABREU E LIMA'){
            abreu.push(doc[0][i])
        }else{
            i++;
        }
    }
    return abreu
}

const addCabo = (value) => {
    const cabo = []

    for (let i = 0; cabo.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'CABO DE SANTO AGOSTINHO'){
            cabo.push(doc[0][i])
        }else{
            i++;
        }
    }
    return cabo
}

const addCamaragibe = (value) => {
    const camragibe = []

    for (let i = 0; camragibe.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'CAMARAGIBE'){
            camragibe.push(doc[0][i])
        }else{
            i++;
        }
    }
    return camragibe
}

const addSaoLourenco = (value) => {
    const saolourenco = []

    for (let i = 0; saolourenco.length < value; i++) {
        if(doc[0][i].MUNICIPIO == 'SAO LOURENCO DA MATA'){
            saolourenco.push(doc[0][i])
        }else{
            i++;
        }
    }
    return saolourenco
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /casosTotais:
 *  get:
 *      description: Dados relativos a todos os municípios
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
app.get('/casostotais', (req, res) => {
    const result = req.query.pageSize
    const response = addTodosMunicipios(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosRecife:
 *  get:
 *      description: Dados relativos ao municipio de Recife
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 */
 app.get('/dadosrecife', (req, res) => {
    const result = req.query.pageSize
    const response = addRecife(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosJaboatao:
 *  get:
 *      description: Dados relativos ao municipio de Recife
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 */
 app.get('/dadosjaboatao', (req, res) => {
    const result = req.query.pageSize
    const response = addJaboatao(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosOlinda:
 *  get:
 *      description: Dados relativos ao municipio de Recife
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 */
 app.get('/dadosolinda', (req, res) => {
    const result = req.query.pageSize
    const response = addOlinda(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosAlianca:
 *  get:
 *      description: Dados relativos ao municipio de Alianca
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
 app.get('/dadosalianca', (req, res) => {
    const result = req.query.pageSize
    const response = addAlianca(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosAbreueLima:
 *  get:
 *      description: Dados relativos ao municipio de Abreu e Lima
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
 app.get('/dadosAbreueLima', (req, res) => {
    const result = req.query.pageSize
    const response = addAbreueLima(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosCabodeSantoAgostinho:
 *  get:
 *      description: Dados relativos ao municipio de Abreu e Lima
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
 app.get('/dadosCabodeSantoAgostinho', (req, res) => {
    const result = req.query.pageSize
    const response = addCabo(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosCamaragibe:
 *  get:
 *      description: Dados relativos ao municipio de Abreu e Lima
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
 app.get('/dadosCamaragibe', (req, res) => {
    const result = req.query.pageSize
    const response = addCamaragibe(result);
    res.send([response])
})

/**
 * @swagger
 * /dadosSaoLourenco:
 *  get:
 *      description: Dados relativos ao municipio de Abreu e Lima
 *      parameters:
 *          - name: pageSize
 *            in: query
 *            desciption: number of cities
 *            type: integer
 *      responses:
 *          200:
 *              description: Success
 *      
 */
 app.get('/dadosSaoLourenco', (req, res) => {
    const result = req.query.pageSize
    const response = addSaoLourenco(result);
    res.send([response])
})


// app.get('/books', (req, res) => {
//     res.send([
//         {
//             id: 1,
//             title: 'teste'
//         }
//     ])

app.listen(5000, () => console.log("listening on 5000"));

// /**
//  * @swagger
//  * /dadosAlianca:
//  *  get:
//  *      description: Dados relativos ao municipio de Alianca
//  *      responses:
//  *          200:
//  *              description: Success
//  *              schema:
//  *                  type: object
//  *                  allOf:
//  *                      - $ref: '#/definitions/PaginationResponse'
//  *                      - properties:
//  *                          devices:
//  *                              type: array
//  *                              items:
//  *                                  $ref: '#/definitions/dadosAlianca'
//  *      definitions:
//  *          PaginationResponse:
//  *              type: object
//  *              properties:
//  *                  totalrecords:
//  *                      type: number
//  *                  displayrecords:
//  *                      type: number
//  *              xml:
//  *                  name: PaginationResponseData
//  * 
//  *      parameters:
//  *          Pagelength:
//  *              name: pagelength
//  *              in: query
//  *              description: Number of records to return
//  *              type: number
//  *          Startindex:
//  *              name: startindex
//  *              in: query
//  *              description: Start index for paging
//  *              type: number
//  *      
//  */