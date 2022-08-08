//let x = document.getElementById("button");

function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('Still don\'t know why it works');
    }

    input.addEventListener('click', clickAlert);
}
