import styled from 'styled-components';

export const Container = styled.div`
  width: 185px;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  background: ${(props) => props.color}20;
`;
