
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

const UserManagement = () => {
    return (
        <div>
        <h1>Um Counter</h1>
        <h2 id="count-el">0</h2>
        <button id="increment-btn" onclick="increment()">INCREMENT</button>
        <button id="save-btn" onclick="save()">SAVE</button>
        <p id="save-el">Previous entries: </p>
        </div>
        );
    };

export default UserManagement;