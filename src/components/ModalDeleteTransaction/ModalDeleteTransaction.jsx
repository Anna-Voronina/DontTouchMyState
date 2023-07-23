import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import { closeModalDeleteTransaction } from 'redux/global/globalSlice';
import {
  delTransactionThunk,
  getAllTransactionsThunk,
} from 'redux/transaction/transactionOperations';
import {
  ButtonWrapper,
  ModalContainer,
  ModalWrapper,
  Title,
} from './ModalDeleteTransaction.styled';
import { selectUser } from 'redux/auth/authSelectors';

const ModalDeleteTransaction = ({ transactionId }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleDeleteTransaction = () => {
    dispatch(delTransactionThunk(transactionId)).then(() =>
      dispatch(getAllTransactionsThunk())
    );
    dispatch(closeModalDeleteTransaction());
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <Title>
          {user.username}, are you sure that you want to delete this
          transaction?
        </Title>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => dispatch(closeModalDeleteTransaction())}
            text="Cancel"
            variant={'secondary'}
          />
          <Button
            type="button"
            onClick={handleDeleteTransaction}
            text="Delete"
          />
        </ButtonWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ModalDeleteTransaction;