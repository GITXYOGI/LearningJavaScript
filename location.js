const firstDiv = document.getElementsByClassName("firstDiv")[0];

const getCurrentLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })
}

getCurrentLoc();