import axios from 'axios'

interface Newsletter {
    name: string
    email: string
}

async function postNewsLetter(payload: Newsletter) {
    let res
    try {
        res = await axios.post(
            'https://api.jungledevs.com/api/v1/challenge-newsletter/',
            payload
        )
    } catch (err) {
        console.log(err)
    }

    const data = res?.data
    return data
}

export default postNewsLetter
