import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  Modal,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ReviewProps } from '../../types/common.types';

const validationSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test('rating', 'should be in between 1 - 5', (s) => {
      const n = parseInt(s);
      return n > 0 && n <= 5;
    }),
});

interface Props {
  addNewReview: (newReview: ReviewProps) => void;
}

export const AddNewReviewModal: React.FC<Props> = ({ addNewReview }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <StyledContainer>
      <AddIconWrapper>
        <MaterialIcons name="add" size={24} onPress={open} />
      </AddIconWrapper>
      <Modal visible={isOpen} animationType="slide">
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <ModalContent>
            <View>
              <CloseIconWrapper>
                <MaterialIcons name="close" size={24} onPress={close} />
              </CloseIconWrapper>

              <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values) => {
                  addNewReview({ id: Math.random().toString(), ...values });
                  close();
                }}
                validationSchema={validationSchema}
              >
                {({ values, handleChange, submitForm, touched, errors, handleBlur }) => {
                  return (
                    <FormWrapper>
                      <StyledTextInput
                        value={values.title}
                        placeholder="title"
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                      />
                      {touched.title && <ErrorText>{errors.title}</ErrorText>}

                      <StyledTextInput
                        value={values.body}
                        placeholder="body"
                        onChangeText={handleChange('body')}
                        onBlur={handleBlur('rating')}
                      />
                      {touched.body && <ErrorText>{errors.body}</ErrorText>}

                      <StyledTextInput
                        value={values.rating}
                        placeholder="rating"
                        keyboardType="number-pad"
                        onChangeText={handleChange('rating')}
                        onBlur={handleBlur('rating')}
                      />
                      {touched.rating && <ErrorText>{errors.rating}</ErrorText>}

                      <Button title="Submit" onPress={submitForm} color="coral" />
                    </FormWrapper>
                  );
                }}
              </Formik>
            </View>
          </ModalContent>
        </TouchableWithoutFeedback>
      </Modal>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)``;

const AddIconWrapper = styled(View)`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  margin: 10px 0;
`;

const ModalContent = styled(View)`
  flex: 1;
  padding: 20px;
`;

const FormWrapper = styled(View)`
  padding: 20px;
`;

const CloseIconWrapper = styled(AddIconWrapper)`
  margin-top: 40px;
`;

const StyledTextInput = styled(TextInput)`
  border: 1px solid #333;
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;
`;

const ErrorText = styled(Text)`
  color: crimson;
`;
