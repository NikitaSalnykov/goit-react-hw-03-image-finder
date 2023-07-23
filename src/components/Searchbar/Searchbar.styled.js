import styled from 'styled-components';

export const HeaderSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgb(0, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(0, 58, 180, 1) 0%,
    rgba(0, 199, 200, 1) 97%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 98px;
    height: 48px;
    border: 0;
    font-size: small;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  & input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 12px;
    padding-right: 4px;
    padding-bottom: 4px;
    &::placeholder {
      font: inherit;
    }
  }
`;
