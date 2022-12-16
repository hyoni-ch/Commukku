import styled from '@emotion/styled'


const UploadForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h4 {
    margin: 15px auto;
  }
  textarea {
    min-height: 50px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    border-radius: 10px;
    &:active,
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 15px;
        background-colip: padding-box;
        border: 2px solid transparent;
    }
    &::-webkit-scrollbar {
        background-color: lightgray;
        border-radius: 15px;
        box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 10px;
    width: 80px;
    background-color: #E2CBB7;
    border: none;
    border-radius: 20px;
    color: black;
    &:hover {
      color: white;
    }
    &.cancel {
      margin-right: 10px;
      background-color: white;
      color: black;
      border: 1px solid #E2CBB7;
      &:hover {
        background-color: #E2CBB7;
      }
    }
  }
`;



export { UploadButtonDiv, UploadForm };