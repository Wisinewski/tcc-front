import axios from 'axios'
const BASE_URL = 'http://localhost:3333'

/*
export function getSummary() {
    const request = axios.request({
        method: 'GET',
        url: `${BASE_URL}/pets`,
        headers: {
            id_dono: '5f4d969113043012e048be92'
        },
    })

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
*/
export function getSummary() {
    const request = axios.all([
        axios.request({
            method: 'GET',
            url: `${BASE_URL}/pets`,
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzUxMzU4ZTgwNjEyMGUwNDVhMDJjZSIsImlhdCI6MTYwMzA2MDg2MH0.giFni7Fdx5ASm3lwtE1G-L8UW-YZ8BoFJ9MeQ4_pRpY'
            },
        }),
        axios.request({
            method: 'GET',
            url: `${BASE_URL}/info`,
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzUxMzU4ZTgwNjEyMGUwNDVhMDJjZSIsImlhdCI6MTYwMzA2MDg2MH0.giFni7Fdx5ASm3lwtE1G-L8UW-YZ8BoFJ9MeQ4_pRpY',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzUxMzU4ZTgwNjEyMGUwNDVhMDJjZSIsImlhdCI6MTYwMzA2MDg2MH0.giFni7Fdx5ASm3lwtE1G-L8UW-YZ8BoFJ9MeQ4_pRpY'
            },
        })
    ])
    .then(axios.spread((...responses) => {
        return [responses[0].data, responses[1].data]
    }))

    return {
        type: 'INFO_PROFILE_FETCHED',
        payload: request
    }
}

export function addNewPet() {
    const request = axios.request({
        method: 'POST',
        url: `${BASE_URL}/pet/create`,
        headers: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzUxMzU4ZTgwNjEyMGUwNDVhMDJjZSIsImlhdCI6MTYwMzA2MDg2MH0.giFni7Fdx5ASm3lwtE1G-L8UW-YZ8BoFJ9MeQ4_pRpY',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzUxMzU4ZTgwNjEyMGUwNDVhMDJjZSIsImlhdCI6MTYwMzA2MDg2MH0.giFni7Fdx5ASm3lwtE1G-L8UW-YZ8BoFJ9MeQ4_pRpY'
        },
        data: {
            nome: "Belinha",
            id_dono: "5f4d969113043012e048be92",
            idade: "22",
            tipo_pet: "Cachorro",
            porte: "pequena"
        }
    })
}

export function deletePet(id_pet) {
    const request = axios.request({
        method: 'DELETE',
        url: `${BASE_URL}/pet/delete`,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmJjYmI2NDlmOTQ1MWFlODI1NzhlZiIsImlhdCI6MTYwMDkwMDE2MH0.GQ6Rlflskvn6SB9po8zRXDPJmERzcLeY6NAmJUv_LFk',
            id_pet: id_pet
        }
    })
}

export function atualizaUsuario() {
    var nome = document.forms["formUsuario"]["name"].value;
    var email = document.forms["formUsuario"]["email"].value;
    var cpf = document.forms["formUsuario"]["name"].value;
    var user_cuidador = document.forms["formUsuario"]["cuidador"].value;
    var telefone = document.forms["formUsuario"]["telefone"].value;

    const request = axios.request({
        method: 'PUT',
        url: `${BASE_URL}/user/update`,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmJjYmI2NDlmOTQ1MWFlODI1NzhlZiIsImlhdCI6MTYwMDkwMDE2MH0.GQ6Rlflskvn6SB9po8zRXDPJmERzcLeY6NAmJUv_LFk',
        },
        data: {
            nome: "Joao",
            email: email,
            cpf: cpf,
            user_cuidador: user_cuidador,
            telefone: telefone
        }
    })
}
