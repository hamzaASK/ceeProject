import { URL } from '../Settings/Server'

export function getConsumedEnergy(days) {
    const url = `${URL}/energy/getConsumedEnergy.php?days=${days}`;
    return fetch(url)
        .then(res => res.json())
        .then((res) => {
            if (res[0] == null)
                return 100
            else
                return 100
        })
        .catch((error) => {
            console.log(error)
        });
}
