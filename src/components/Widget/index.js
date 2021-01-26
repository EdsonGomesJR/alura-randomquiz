import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    * {
      margin: 0;
  }
`;

Widget.Content = styled.div`
   
    padding: 24px 32px 32px 32px;

    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  
  `;

Widget.Input = styled.input`
  width: 283px;
  height: 40px;
  padding: 16px 8px;
  border-radius: 4px;
  background-color:${({ theme }) => theme.colors.mainBg};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid  rgba(255, 255, 255, 0.5);

margin-bottom: 24px`;

Widget.Button = styled.button`
  width: 283px;
  height: 40px;
  background-color: #FF9800;
  color: #fff;
  font-weight: 700;
  font-family: 'Lato';
  font-size: 14px;
  /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24); */
  border-radius: 4px;
  line-height: 16px;
  border-color: transparent;
  `;
export default Widget;
