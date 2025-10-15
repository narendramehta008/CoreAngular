import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent, NgxEditorModel } from "ngx-monaco-editor-v2";
import { editor } from 'monaco-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.populateEditor('monaco', '', 'html');
  }
  title = 'ang-app';

  javasciptEditOpt = this.editorOpt();
  htmlEditOpt = this.editorOpt('html');
  code: string = /* set from `myEditor.getModel()`: */ `function hello() {
	alert('Hello world!');
}`;

  code2: string = "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line";


  model: NgxEditorModel = {
    value: this.code,
    language: 'javascript'
  }

  editorOpt(language: string = 'javascript') {
    return {
      language: language,
    };
  }
  modelOptions(code: string, language: string = 'javascript'): NgxEditorModel {
    return {
      value: code,
      language: language
    }
  }

  editor1 = this.modelOptions(this.code);
  editor2 = this.modelOptions(this.code2);

  btn() {
    this.editor1 = this.modelOptions(this.code2);
    this.editor2 = this.modelOptions(this.code);
  }

  populateEditor(
    key: string,
    data: string,
    language: string | null,
    readOnly: boolean = false
  ) {
    const editorElement = document.getElementById(key);
    if (editorElement) {
      return editor.create(editorElement, {
        value: data,
        language: language || 'javascript',
        minimap: {
          enabled: false,
        },
        readOnly: readOnly,
        automaticLayout: true,
      });
    }
    return null;
  }
}
