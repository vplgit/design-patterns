// Memento class that stores the state
class EditorMemento {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}

// Originator class whose state we want to save and restore
class Editor {
  private content: string = "";

  type(words: string): void {
    this.content += words;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }

  getContent(): string {
    return this.content;
  }
}

// Caretaker class that keeps track of mementos
class EditorHistory {
  private history: EditorMemento[] = [];

  push(memento: EditorMemento): void {
    this.history.push(memento);
  }

  pop(): EditorMemento | undefined {
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

editor.restore(editorHistory.pop()!);
console.log(editor.getContent());

editor.restore(editorHistory.pop()!);
console.log(editor.getContent());
