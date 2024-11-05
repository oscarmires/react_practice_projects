export async function searchByName(name) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let resJSON = await res.json();

    if (!res.ok) resJSON = [];

    console.log(resJSON);

    return resJSON;
}
