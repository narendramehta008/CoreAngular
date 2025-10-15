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
    this.monacorLoader();
  }

  editorOptions: editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
  };
  code: NgxEditorModel = {
    value: 'function x() {\n  console.log("Hello world!");\n}',
    language: 'javascript',
  }
  code2: NgxEditorModel = {
    value: '',
    language: 'html',
  }

  monacorLoader() {
    if (typeof window !== "undefined") {
      (<any>window).MonacoEnvironment = {
        getWorkerUrl: function (moduleId: string, label: string) {
          return `/assets/monaco/min/vs/base/worker/workerMain.js`;
        }
      };
    }
  }

}
