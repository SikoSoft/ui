/*
export interface SSInputProps {
  [SSInputProp.TYPE]: InputType;
  [SSInputProp.VALUE]: string;
  [SSInputProp.AUTO_COMPLETE]: boolean;
  [SSInputProp.PLACEHOLDER]: string;
  [SSInputProp.SUGGESTIONS]: string[];
}
*/

import { PropTypes } from './Prop';

export type PropConfigMap<Props extends PropTypes> = {
  [Property in keyof Props]: {
    default: Props[Property];
    control: Props[Property] extends boolean ? 'boolean' : 'text';
    description: string;
  };
};
