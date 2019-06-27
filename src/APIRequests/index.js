import { URL } from '../Settings/Server'

function apiReponse(url) {
    return fetch(url)
        .then(res => res.json())
        .then((res) => {
            if (res[0] === null) {
                return 0
            } else {
                return res[0]
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export function consumedEnergy(days) {
    const url = `${URL}/energy/getConsumedEnergy.php?days=${days}`
    return apiReponse(url)
}

export function consumedPV(days) {
    const url = `${URL}/energy/getConsumedPV.php?days=${days}`
    return apiReponse(url)
}

export function consumedEclairage(days) {
    const url = `${URL}/energy/getConsumedEclairage.php?days=${days}`
    return apiReponse(url)
}

export function consumedCVC(days) {
    let url = `${URL}/energy/getConsumedCVC.php?days=${days}`
    return apiReponse(url)
}

export function consumedPlugs(days) {
    const url = `${URL}/energy/getConsumedPlugs.php?days=${days}`
    return apiReponse(url)
}

export function consumedWater(days) {
    const url = `${URL}/water/getConsumedWater.php?days=${days}`
    return apiReponse(url)
}

export function recycledWater(days) {
    const url = `${URL}/water/getRecycledWater.php?days=${days}`;
    return apiReponse(url)
}

export function airQuality() {
    const url = `${URL}/air/airquality.php`
    return fetch(url)
        .then(res => res.json())
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.log(error)
        });
}
