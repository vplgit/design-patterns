"use strict";
// Memento class that stores the state
class EditorMemento {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
// Originator class whose state we want to save and restore
class Editor {
    constructor() {
        this.content = "";
    }
    type(words) {
        this.content += words;
    }
    save() {
        return new EditorMemento(this.content);
    }
    restore(memento) {
        this.content = memento.getContent();
    }
    getContent() {
        return this.content;
    }
}
// Caretaker class that keeps track of mementos
class EditorHistory {
    constructor() {
        this.history = [];
    }
    push(memento) {
        this.history.push(memento);
    }
    pop() {
        return this.history.pop();
    }
}
// Usage
const editor = new Editor();
const editorHistory = new EditorHistory();
editor.type("This is the first sentence. ");
editorHistory.push(editor.save());
editor.type("This is the second sentence. ");
editorHistory.push(editor.save());
editor.type("This is the third sentence.");
console.log(editor.getContent());
editor.restore(editorHistory.pop());
console.log(editor.getContent());
editor.restore(editorHistory.pop());
console.log(editor.getContent());
