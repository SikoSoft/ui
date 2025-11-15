import { css } from 'lit';

export const theme = css`
  :host {
    --ssui-negative-color: #600;
    --ssui-negative-background-color: #ffc4c4;
    --ssui-positive-color: #060;
    --ssui-positive-background-color: #c4ffc4;
    --ssui-box-background-color: #fff;
    --ssui-box-border-color: #aaa;
    --ssui-box-text-color: #000;
    --ssui-input-background-color: #fff;
    --ssui-input-border-color: #ccc;
    --ssui-input-text-color: #000;
    --ssui-input-suggestion-background-color: #fff;
    --ssui-input-suggestion-text-color: #888;
    --ssui-input-suggestion-selected-background-color: #ddd;
    --ssui-input-suggestion-selected-text-color: #000;
    --ssui-loader-color1: #000;
    --ssui-loader-color2: #0002;
    --ssui-toggle-outer-background-color1: #777;
    --ssui-toggle-outer-background-color2: #999;
    --ssui-toggle-inner-background-color1: #ccc;
    --ssui-toggle-inner-background-color2: #aaa;
    --ssui-toggle-ball-background-color1: #555;
    --ssui-toggle-ball-background-color2: #777;
    --ssui-toggle-ball-border-color: #222;
  }

  input[type='text'],
  input[type='date'],
  input[type='datetime-local'],
  input[type='password'],
  input[type='number'],
  select,
  button {
    font-family: Poppins;
    padding: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    color: var(--input-text-color, var(--ssui-input-text-color, #000));
    background-color: var(
      --input-background-color,
      var(--ssui-input-background-color, #fff)
    );
    border: 1px solid
      var(--input-border-color, var(--ssui-input-border-color, #ccc));
    border-radius: 0.5rem;
  }
  main {
    margin-top: 1rem;
  }

  fieldset {
    border-radius: 0.5rem;
  }

  .box {
    background-color: var(
      --box-background-color,
      var(--ssui-box-background-color)
    );
    border-radius: 8px;
    border: 1px var(--box-border-color, var(--ssui-box-border-color)) solid;
  }
`;
