const book = document.getElementById("book");

if (book.innerHTML === "") {
    chrome.storage.local.get(["note"], (result) => {
        book.innerHTML = result.note;
      });
}

book.addEventListener("input", () => {
    let bookNotes = book.innerHTML;

    chrome.storage.local.set({ note: bookNotes });
    chrome.storage.local.get(["note"]);
})

