import React, { useRef, useState, useCallback, useEffect } from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import * as S from "./CreateNetworkPage.style";
import { useNavigate } from "react-router-dom";
import { createNetwork } from "../../apis/createNetwork";
import axios from "axios";

export default function CreateNetworkPage() {
  const inputRef = useRef();
  const navigator = useNavigate();
  const [networkingName, setNetworkingName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "NETWORKING/1724822855391_Group 111.png"
  );
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const [info, setInfo] = useState({
    name: "",
    representativeImg: "",
    description: "",
    relatedLink: "",
  });

  // useEffect 수정: 상태가 변경될 때마다 info 업데이트
  useEffect(() => {
    console.log("hhh", networkingName, imageUrl, link, description);
    setInfo({
      name: networkingName,
      representativeImg: imageUrl,
      description: description,
      relatedLink: link,
    });
  }, [networkingName, imageUrl, link, description]);

  useEffect(() => {
    console.log("보낼 데이터 : ", info);
  }, [info]);

  const [imagePreviewUrl, setImagePreviewUrl] = useState(logo); // 초기 상태로 로고 이미지를 사용
  const [imageFileName, setImageFileName] = useState(
    "네트워킹 대표 이미지를 첨부해주세요"
  );
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdW5zdWs4OTYwQG5hdmVyLmNvbSIsImlhdCI6MTcyNDgyMjkwMywiZXhwIjoxNzI0ODY2MTAzfQ.eDihDnI87Bos9-ZJEpNiQklKIe9RT_96LuJq4DEp5J4";

  const imageUpload = useCallback(
    (file) => {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      axios
        .post(
          "http://54.180.236.193:8080/image/upload",
          formData, // axios는 두 번째 인자로 data를 받고, 세 번째 인자로 설정을 받습니다.
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setImageUrl(response.data.imageName);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [token]
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // imageUpload(file); // 이미지 업로드 함수 호출
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateNetwork = () => {
    console.log("최종 보낼 데이터 : ", info); // info 상태 확인
    createNetwork(info)
      .then(() => {
        // 성공 시 네비게이션
        navigator("/createFormat");
      })
      .catch((error) => {
        console.error(error);
        alert("네트워크 생성 중 오류가 발생했습니다.");
      });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Icon src={logo} width="35px" />
        <S.HeaderCenter>
          <S.HeaderTitle>네트워킹 생성</S.HeaderTitle>
        </S.HeaderCenter>
        <S.Icon src={closeIcon} width="25px" onClick={() => navigator(-1)} />
      </S.Header>
      <S.Form>
        <S.SubHeaderTitle>네트워킹 정보를 입력하세요</S.SubHeaderTitle>
        <S.InputContainer>
          <S.Label>네트워킹 이름</S.Label>
          <S.Input
            placeholder="네트워킹 이름을 입력해주세요"
            value={networkingName}
            onChange={(e) => setNetworkingName(e.target.value)}
          />
        </S.InputContainer>
        <S.ImageInputContainer>
          <S.ImagePreview
            onClick={() => inputRef.current.click()}
            style={{
              backgroundImage: `url(${imagePreviewUrl})`,
              width: "60px",
            }}
          />
          <S.ImageInput
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
          />
          <S.InputContainer onClick={() => inputRef.current.click()}>
            <S.Label>대표이미지 (선택)</S.Label>
            <S.ImageInputBtn>{imageFileName}</S.ImageInputBtn>
          </S.InputContainer>
        </S.ImageInputContainer>
        <S.InputContainer>
          <S.Label>네트워킹 관련 링크 (선택)</S.Label>
          <S.Input
            placeholder="관련 링크를 입력해주세요"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>네트워킹 간단 소개</S.Label>
          <S.Textarea
            placeholder="네트워킹 간단 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.InputContainer>
      </S.Form>
      <S.SubmitBtn onClick={handleCreateNetwork}>네트워킹 생성하기</S.SubmitBtn>
    </S.Container>
  );
}
