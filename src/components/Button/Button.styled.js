import styled from 'styled-components';

export const Btn = styled.button`
  margin: 0 auto;
  width: 40%;
  padding: 26px 16px;
  border-radius: 2px;
  background: rgb(0, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(0, 58, 180, 1) 0%,
    rgba(0, 199, 200, 1) 97%
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background: rgb(0, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(0, 18, 180, 1) 0%,
      rgba(0, 66, 200, 1) 97%
    );
  }

  &:focus {
    background: rgb(0, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(0, 18, 180, 1) 0%,
      rgba(0, 66, 200, 1) 97%
    );
  }
`;
