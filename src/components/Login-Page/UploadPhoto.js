import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as UploadPhotoSVG } from "../../assets/uploadPhoto.svg";

const UploadPhoto = ({ setFile }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setFile(e.target.result);
    };
  };

  return (
    <Container>
      <Label>add a photo</Label>
      <Upload onClick={handleClick}>
        <UploadPhotoSVG />
      </Upload>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      ></input>
    </Container>
  );
};

export default UploadPhoto;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 53px;

  @media screen and (max-width: 465px) {
    margin-bottom: 28px;
  }
`;

const Label = styled.label`
  font: normal normal 300 22px/33px Poppins;

  @media screen and (max-width: 465px) {
    font: normal normal 300 18px/28px Poppins;
  }
`;

const Upload = styled.div`
  width: 122px;
  height: 122px;

  margin-top: 6px;
  border-radius: 50%;
  background: #e6ebff;
  transition: all 0.2s;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #5efc8d;
  }

  @media screen and (max-width: 465px) {
    width: 98px;
    height: 98px;
  }
`;
