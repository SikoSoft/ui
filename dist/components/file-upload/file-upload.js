var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e;
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FileUploadSuccessEvent, FileUploadFailedEvent, } from './file-upload.events';
import { FileUploadProp, fileUploadProps, } from './file-upload.models';
let FileUpload = class FileUpload extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = fileUploadProps[FileUploadProp.ENDPOINT_URL].default;
        this[_b] = fileUploadProps[FileUploadProp.ALLOWED_TYPES].default;
        this[_c] = fileUploadProps[FileUploadProp.PREVIEW].default;
        this[_d] = fileUploadProps[FileUploadProp.BUTTON_TEXT].default;
        this[_e] = fileUploadProps[FileUploadProp.AUTH_TOKEN].default;
        this.showSelector = false;
        this.url = '';
    }
    static { _a = FileUploadProp.ENDPOINT_URL, _b = FileUploadProp.ALLOWED_TYPES, _c = FileUploadProp.PREVIEW, _d = FileUploadProp.BUTTON_TEXT, _e = FileUploadProp.AUTH_TOKEN; }
    static { this.styles = css ``; }
    get classes() {
        return {
            'file-upload': true,
        };
    }
    get isImage() {
        if (this.url.match(/\.jpg$/) ||
            this.url.match(/\.png$/) ||
            this.url.match(/\.gif$/)) {
            return true;
        }
        return false;
    }
    async saveToServer(file) {
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
            const resultTyped = resultJson;
            const { url } = resultTyped;
            this.showSelector = false;
            this.url = url;
            this.dispatchEvent(new FileUploadSuccessEvent({ url }));
        }
        catch (error) {
            this.dispatchEvent(new FileUploadFailedEvent({}));
        }
    }
    openFileSelector() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
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
    render() {
        return html `
      <div class=${classMap(this.classes)}>
        ${this.preview && this.isImage
            ? html `<div class="preview">
              <img src=${this.url} />
            </div>`
            : nothing}

        <div class="selector">
          <button @click=${this.openFileSelector}>${this.buttonText}</button>
        </div>
      </div>
    `;
    }
};
__decorate([
    property()
], FileUpload.prototype, _a, void 0);
__decorate([
    property({ type: Array })
], FileUpload.prototype, _b, void 0);
__decorate([
    property({ type: Boolean })
], FileUpload.prototype, _c, void 0);
__decorate([
    property()
], FileUpload.prototype, _d, void 0);
__decorate([
    property()
], FileUpload.prototype, _e, void 0);
__decorate([
    state()
], FileUpload.prototype, "showSelector", void 0);
__decorate([
    state()
], FileUpload.prototype, "url", void 0);
__decorate([
    state()
], FileUpload.prototype, "classes", null);
__decorate([
    state()
], FileUpload.prototype, "isImage", null);
FileUpload = __decorate([
    customElement('file-upload')
], FileUpload);
export { FileUpload };
//# sourceMappingURL=file-upload.js.map