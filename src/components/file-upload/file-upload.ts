import { LitElement, html, TemplateResult, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  FileUploadSuccessEvent,
  FileUploadFailedEvent,
} from './file-upload.events';
import {
  FileUploadProp,
  fileUploadProps,
  FileUploadProps,
  FileUploadResponseBody,
} from './file-upload.models';

import '../ss-button/ss-button';

@customElement('file-upload')
export class FileUpload extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .file-upload {
      padding: 1rem;
    }

    .preview {
      margin-bottom: 1rem;
    }

    .preview img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .selector {
      text-align: center;
    }
  `;

  @property()
  [FileUploadProp.ENDPOINT_URL]: FileUploadProps[FileUploadProp.ENDPOINT_URL] =
    fileUploadProps[FileUploadProp.ENDPOINT_URL].default;

  @property()
  [FileUploadProp.ALLOWED_TYPES]: FileUploadProps[FileUploadProp.ALLOWED_TYPES] =
    fileUploadProps[FileUploadProp.ALLOWED_TYPES].default;

  @property({ type: Boolean })
  [FileUploadProp.PREVIEW]: FileUploadProps[FileUploadProp.PREVIEW] =
    fileUploadProps[FileUploadProp.PREVIEW].default;

  @property()
  [FileUploadProp.BUTTON_TEXT]: FileUploadProps[FileUploadProp.BUTTON_TEXT] =
    fileUploadProps[FileUploadProp.BUTTON_TEXT].default;

  @property()
  [FileUploadProp.AUTH_TOKEN]: FileUploadProps[FileUploadProp.AUTH_TOKEN] =
    fileUploadProps[FileUploadProp.AUTH_TOKEN].default;

  @state()
  showSelector = false;

  @state()
  url = '';

  @state()
  get classes(): Record<string, boolean> {
    return {
      'file-upload': true,
    };
  }

  @state()
  get isImage(): boolean {
    if (
      this.url.match(/\.webp$/i) ||
      this.url.match(/\.jpeg$/i) ||
      this.url.match(/\.jpg$/i) ||
      this.url.match(/\.png$/i) ||
      this.url.match(/\.gif$/i)
    ) {
      return true;
    }

    return false;
  }

  async saveToServer(file: File) {
    try {
      var data = new FormData();
      data.append('file', file);

      const headers = new Headers();
      headers.append('authorization', this.authToken);

      const request = new Request(this.endpointUrl, {
        method: 'POST',
        headers,
        body: data,
      });

      const result = await fetch(request);

      if (!result.ok) {
        this.dispatchEvent(new FileUploadFailedEvent({}));
        return;
      }

      const resultJson = await result.json();
      const resultTyped = resultJson as FileUploadResponseBody;

      const { url } = resultTyped;

      this.showSelector = false;
      this.url = url;

      this.dispatchEvent(new FileUploadSuccessEvent({ url }));
    } catch (error) {
      this.dispatchEvent(new FileUploadFailedEvent({}));
    }
  }

  openFileSelector() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', this.allowedTypes);
    input.click();
    input.onchange = () => {
      if (input.files) {
        const file = input.files[0];
        if (/^image\//.test(file.type)) {
          this.saveToServer(file);
        }
      }
    };
  }

  render(): TemplateResult {
    return html`
      <div class=${classMap(this.classes)} part="container">
        ${this.preview && this.isImage
          ? html`<div class="preview" part="preview">
              <img src=${this.url} part="image" />
            </div>`
          : nothing}

        <div class="selector" part="selector">
          <ss-button @click=${this.openFileSelector}
            >${this.buttonText}</ss-button
          >
        </div>
      </div>
    `;
  }
}
