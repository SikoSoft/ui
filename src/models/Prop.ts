export type PropTypes = Record<string, any>;

export type PropConfigMap<Props extends PropTypes> = {
  [Property in keyof Props]: {
    default: Props[Property];
    control: Props[Property] extends boolean ? 'boolean' : 'text';
    description: string;
  };
};
