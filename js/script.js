
function showPopup() {
    const popup = document.querySelector('.showPopup');
    popup.classList.toggle('active'); 
}

function showSign() {
    const sign = document.querySelector('.showSign');
    sign.classList.toggle('on');
}

function saveToLocalStorage() {
    const email = document.querySelector('.showPopup input[type="email"]').value;
    const password = document.querySelector('.showPopup input[type="password"]').value;
    const birthday = document.querySelector('.showPopup input[type="date"]').value;
    const gender = document.querySelector('.showPopup input[name="gender"]:checked')?.value;

    if (!email || !password || !birthday || !gender) {
        alert('Iltimos toldiring');
        return;
    }

    const userData = { email, password, birthday, gender };
    localStorage.setItem('userData', JSON.stringify(userData));

}