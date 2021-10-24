import styled from "styled-components";
import device from "Constants/reactive";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #676767;
  margin-top:180px;
  gap: 50px;
  
  svg {
    width: 100%;
    max-width: 680px;
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 50px;
      font-size: 20px;
      text-align: center;
    @media ${device.mobile} {
      font-size: 16px;
      margin-bottom: 0;
    }
  }

  a {
    padding: 20px 30px;
    background-color: #6a76e9;
    border-radius: 20px;
    color: #ffffffff;
  }

  @media ${device.mobile} {
    padding: 100px 0 0;
  }
`;
