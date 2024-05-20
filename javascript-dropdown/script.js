window.onclick = (e) => {
    const dropdownBtn = document.getElementsByClassName("dropdown-button")[0];
    const dropdownContent = document.getElementsByClassName("dropdown-content")[0];

    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.toggle("show");
    } else if (dropdownBtn.contains(e.target)) {
        dropdownContent.classList.toggle("show");
    }
};
