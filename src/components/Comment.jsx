import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

import ButtonEle from '../elements/ButtonEle';
import { commentActions } from '../redux/modules/comment';

const Comment = ({ userid, postid, commentid, comment, createdAt }) => {
  const dispatch = useDispatch();
  const local_userid = localStorage.getItem('userid');

  const editComment = e => {
    dispatch(commentActions.editCommentDB());
  };
  const deleteComment = (post_id, comment_id) => {
    console.log(comment_id);
    dispatch(commentActions.deleteCommentDB(post_id, comment_id));
  };

  return (
    <CommentBox>
      <div>
        <Name>{userid}</Name>
        <ButtonsWrap>
          {/* <ButtonEle>
            <EditIcon onClick={editComment} />
          </ButtonEle> */}
          {userid === local_userid ? (
            <ButtonEle>
              <DeleteIcon
                onClick={() => {
                  deleteComment(postid, commentid);
                }}
              />
            </ButtonEle>
          ) : (
            <></>
          )}
        </ButtonsWrap>
      </div>
      <Desc>{comment}</Desc>
      <Date>{createdAt}</Date>
    </CommentBox>
  );
};

const CommentBox = styled.li`
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 10px;
  list-style: none;
  background-color: #eaeaea;

  & > div {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const Name = styled.span`
  margin-right: 10px;
  flex-grow: 1;
`;
const Desc = styled.p`
  margin: 0;
  flex-grow: 4;
`;
const Date = styled.span`
  font-size: 12px;
`;
const ButtonsWrap = styled.div`
  & > button {
    border-radius: 0;
    padding: 0;
    background-color: transparent;
    color: #6889b6;

    &:hover {
      background-color: transparent;
    }
  }
  & > button:first-child {
    margin-right: 5px;
  }
`;

export default Comment;
