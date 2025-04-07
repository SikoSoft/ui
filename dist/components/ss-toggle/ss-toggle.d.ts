import { LitElement } from 'lit';
import { SSToggleProp, SSToggleProps } from './ss-toggle.models';
export declare class SSToggle extends LitElement {
    static styles: import("lit").CSSResult;
    [SSToggleProp.ON]: SSToggleProps[SSToggleProp.ON];
    get classes(): {
        toggle: boolean;
        on: boolean;
    };
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
