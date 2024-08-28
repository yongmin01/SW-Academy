import axios from "axios";
import React, { useCallback } from "react";

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdW5zdWs4OTYwQG5hdmVyLmNvbSIsImlhdCI6MTcyNDgyMTE5MSwiZXhwIjoxNzI0ODY0MzkxfQ.QaVIXQElvBL0GEnhyce3N3t9gzTt2606deglM19aG0k";

export const ImageUploader = () => {
  const imageUpload = useCallback((e) => {
    if (!e) {
      return;
    }

    const formData = new FormData();
    formData.append("image", e);

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
        console.log("이미저 업로드 성공: ", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <input
      type="file"
      onChange={(e) => {
        if (e.target.files.length > 0) {
          imageUpload(e.target.files[0]);
        }
      }}
    />
  );
};
