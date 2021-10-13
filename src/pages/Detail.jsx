import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { commentActions } from '../redux/modules/comment';
import Post from '../components/Post';
import Comment from '../components/Comment';
import ButtonEle from '../elements/ButtonEle';
import InputEle from '../elements/InputEle';
import LabelEle from '../elements/LabelEle';

const Detail = props => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;

  const handleChange = e => {
    const { value, name } = e.target; //event target name

    setInput({
      [name]: value,
    });
  };

  const writeComment = e => {
    e.preventDefault();
    dispatch(commentActions.setCommentFB('작성자', comment));
    setInput({
      comment: '',
    });
  };

  return (
    <>
      <Post />
      <Form>
        <InputBox>
          <LabelEle htmlFor='' hidden>
            댓글작성
          </LabelEle>
          <InputEle
            name='comment'
            value={comment}
            type='text'
            placeholder='댓글을 작성해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        <ButtonEle onClick={writeComment}>댓글작성</ButtonEle>
      </Form>
      <CommentList>
        <Comment />
      </CommentList>
    </>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;

  & > div {
    width: 80%;
    margin-right: 5%;
  }
  & input {
    width: 100%;
  }
`;

const InputBox = styled.div``;

const CommentList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export default Detail;