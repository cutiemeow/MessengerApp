export const loadDataFromAPI = async () =>{
    const response = await fetch('http://www.mocky.io/v2/5d4a423033000051000f5bd3');
    const responseJson = await response.json();
    return responseJson;
}