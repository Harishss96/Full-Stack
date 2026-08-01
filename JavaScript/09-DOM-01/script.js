const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please enter a note.");
    return;
  }

  if (notesContainer.innerHTML === "<p>No Notes Available</p>") {
    notesContainer.innerHTML = "";
  }

  const note = document.createElement("div");
  note.classList.add("note");

  const text = document.createElement("p");
  text.textContent = noteText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    note.remove();

    console.log("Note Deleted");

    if (notesContainer.children.length === 0) {
      notesContainer.innerHTML = "<p>No Notes Available</p>";
    }
  });

  note.appendChild(text);
  note.appendChild(deleteBtn);

  notesContainer.appendChild(note);

  console.log("New Note Created");
  console.log(noteText);

  noteInput.value = "";
}

function clearNotes() {
  notesContainer.innerHTML = "<p>No Notes Available</p>";

  noteInput.value = "";

  console.clear();

  console.log("All Notes Cleared");
}

addBtn.addEventListener("click", addNote);
clearBtn.addEventListener("click", clearNotes);
