import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  & p {
    display: flex;
    gap: 5px;
    position: absolute;
    transform: translateY(-52px);
    z-index: -1;
    padding-left: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    font-size: 15px;
  }
  & svg {
    fill: blue;
    width: 20px;
    height: 20px;
  }
`;

export const GalleryItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  background: rgb(236, 242, 255);
  background: linear-gradient(
    90deg,
    rgba(236, 242, 255, 1) 0%,
    rgba(183, 230, 249, 1) 97%
  );
  transition: transform 900ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
    transform: translateY(-21%);
    cursor: zoom-in;
  }
`;
