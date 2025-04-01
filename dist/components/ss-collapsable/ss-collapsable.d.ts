import { LitElement } from 'lit';
import { SSCollapsableProp, SSCollapsableProps } from './ss-collapsable.models';
export declare class SSCollapsable extends LitElement {
    static styles: import("lit").CSSResult[];
    [SSCollapsableProp.TITLE]: SSCollapsableProps[SSCollapsableProp.TITLE];
    [SSCollapsableProp.OPEN]: SSCollapsableProps[SSCollapsableProp.OPEN];
    get classes(): {
        box: boolean;
        collapsable: boolean;
        open: boolean;
    };
    private _handleIconClick;
    private _toggle;
    render(): import("lit-html").TemplateResult<1>;
}
