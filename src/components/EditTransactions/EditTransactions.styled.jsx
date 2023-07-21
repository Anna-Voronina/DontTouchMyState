import { Modal } from 'components/Modal/Modal';
import styled from 'styled-components';

export const ModalEdit = styled(Modal)`
  z-index: 10;
  position: absolute;
  border-radius: 8px;
  padding: 32px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  background: radial-gradient(rgba(60, 40, 160, 1), rgba(68, 53, 110, 1));
  @media screen and (max-width: 320px) {
    min-width: 100%;
  }

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    justify-content: center;
    min-width: 540px;
    padding: 40px 73px;
  }
`;

export const EditModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const EditModalTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: calc(36 / 24);
  color: #fbfbfb;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const EditModalToggle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 16);
  color: rgba(224, 224, 224, 1);
`;

export const OrangeToggle = styled.button`
  color: rgba(255, 182, 39, 1);
  &:hover,
  &:focus {
    color: rgba(255, 182, 39, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const PinkToggle = styled.button`
  color: rgba(255, 134, 141, 1);
  &:hover,
  &:focus {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: calc(24 / 16);
    color: rgba(255, 134, 141, 1);
  }
`;

export const EditTransactionToggleWrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const Slash = styled.p`
  color: rgba(255, 255, 255, 0.4);
`;

export const InputCommentEditModal = styled.input`
  min-width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 8px 20px;
  padding-bottom: 52px;
  background: none;
  color: rgba(251, 251, 251, 1);
  transition: 0.2s;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 8px 20px;
  }
`;

export const InputLineEditModal = styled.input`
  min-width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 8px 20px;
  background: none;
  color: rgba(251, 251, 251, 1);
  transition: 0.2s;
  position: relative;
  &:hover {
    outline: none;
    border-bottom-color: #6a679e;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    min-width: 216px;
  }
`;

export const SaveChangedTransactionsBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 280px;
  height: 50px;
  padding: 13px 115px 13px 115px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: #fbfbfb;
  background-image: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  &:hover,
  &:focus,
  &:active {
    scale: 0.99;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;
export const DiscardEditButton = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 280px;
  height: 50px;
  padding: 13px 115px 13px 115px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: calc(27 / 18);
  background-color: #fbfbfb;
  color: #623f8b;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  &:hover,
  &:focus,
  &:active {
    scale: 0.99;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const CloseButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fbfbfb;
    background-color: transparent;
    border: none;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
`;

/* input:checked + .toggleSlider {
  background-color: #2196f3;
}

input:focus + .toggleSlider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .toggleSlider:before {
  transform: translateX(26px);
  transition: transform 0.4s;
} */

export const FormBlockEditModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and(min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;
export const Backdrop = styled.div`
  width: 100vh;
  height: 100vh;
`;
/* inputLine.react-datetime-picker {
  background-image: url('https://fonts.gstatic.com/s/i/materialicons/date_range/v11/24px.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 24px;
  padding-left: 40px;
} */