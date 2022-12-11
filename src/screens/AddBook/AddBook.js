import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {
  firebaseProductsListener,
  requestAddProductToFirebase,
  requestGetAllPRoductsFromFirebase,
  setApp,
} from '~/redux/actions';

import styles from './AddBook.style';
import Button from '~/components/Button';
import Input from '~/components/Input';

const initialFormValues = {
  author: '',
  bookName: '',
  category: '',
  image: '',
  interpreter: '',
  language: '',
  isbn: '',
  pages: '',
  price: '',
  publicationDate: '',
  publisher: '',
  text: '',
  title: '',
  id: '',
};

const SignupSchema = Yup.object().shape({
  author: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  bookName: Yup.string().min(2, 'Too Short!').max(90, 'Too Long!').required('Required'),
  category: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  interpreter: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  isbn: Yup.string().min(8, 'Too Short!').max(15, 'Too Long!').required('Required'),
  image: Yup.string().url('Invalid Url').required('Required'),
});

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const AddBook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { app, dispatch } = props;

  const handleFormSubmit = formValues => {
    formValues.id = formValues.isbn;
    dispatch(requestAddProductToFirebase(formValues));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={SignupSchema}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <View style={styles.formikContainer}>
            <ScrollView>
              <Input
                placeholder="Author"
                value={values.author}
                onChangeText={handleChange('author')}
                iconName="bookmark"
              />
              {errors.author && <Text>{errors.author}</Text>}
              <Input
                placeholder="Book Name"
                value={values.bookName}
                onChangeText={handleChange('bookName')}
                iconName="bookmark"
              />
              {errors.bookName && <Text>{errors.bookName}</Text>}
              <Input
                placeholder="Category"
                value={values.category}
                onChangeText={handleChange('category')}
                iconName="bookmark"
              />
              {errors.category && <Text>{errors.category}</Text>}
              <Input
                placeholder="Image url input"
                value={values.image}
                onChangeText={handleChange('image')}
                iconName="bookmark"
              />
              {errors.image && <Text>{errors.image}</Text>}
              <Input
                placeholder="Interpreter"
                value={values.interpreter}
                onChangeText={handleChange('interpreter')}
                iconName="bookmark"
              />
              <Input placeholder="Isbn" value={values.isbn} onChangeText={handleChange('isbn')} iconName="bookmark" />
              {errors.isbn && <Text>{errors.isbn}</Text>}
              <Input
                placeholder="Language"
                value={values.language}
                onChangeText={handleChange('language')}
                iconName="bookmark"
              />
              <Input
                placeholder="Pages"
                value={values.pages}
                onChangeText={handleChange('pages')}
                iconName="bookmark"
              />
              <Input
                placeholder="Price"
                value={values.price}
                onChangeText={handleChange('price')}
                iconName="bookmark"
              />
              <Input
                placeholder="Publication Date"
                value={values.publicationDate}
                onChangeText={handleChange('publicationDate')}
                iconName="bookmark"
              />
              <Input
                placeholder="Publisher"
                value={values.publisher}
                onChangeText={handleChange('publisher')}
                iconName="bookmark"
              />
              <Input placeholder="Text" value={values.text} onChangeText={handleChange('text')} iconName="bookmark" />
              <Input
                placeholder="Title"
                value={values.title}
                onChangeText={handleChange('title')}
                iconName="bookmark"
              />
              <Button text="Add" onPress={handleSubmit} theme="secondary" />
            </ScrollView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
});

export default AddBook;
