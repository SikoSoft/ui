import { LitElement } from 'lit';
import './svg/svg-profile';
import { SSIconProp, SSIconProps } from './ss-icon.models';
export declare class SSIcon extends LitElement {
    static styles: import("lit").CSSResult[];
    [SSIconProp.NAME]: SSIconProps[SSIconProp.NAME];
    [SSIconProp.COLOR]: SSIconProps[SSIconProp.COLOR];
    [SSIconProp.SIZE]: SSIconProps[SSIconProp.SIZE];
    render(): import("lit-html").TemplateResult<1>;
}
