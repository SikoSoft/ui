import { LitElement, nothing } from 'lit';
import './svg/svg-profile';
import './svg/svg-arrow-circle-left';
import './svg/svg-arrow-circle-right';
import { SSIconProp, SSIconProps } from './ss-icon.models';
export declare class SSIcon extends LitElement {
    static styles: import("lit").CSSResult[];
    [SSIconProp.NAME]: SSIconProps[SSIconProp.NAME];
    [SSIconProp.COLOR]: SSIconProps[SSIconProp.COLOR];
    [SSIconProp.SIZE]: SSIconProps[SSIconProp.SIZE];
    renderIcon(): import("lit-html").TemplateResult<1> | typeof nothing;
    render(): import("lit-html").TemplateResult<1>;
}
