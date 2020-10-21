import React, { useState } from "react";
import "./styles.scss";
import Icons from "../Icons";
import { useForm } from "react-hook-form";
import { SketchPicker } from 'react-color'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("id", Date.now());
    formData.append("image", data.image[0]);
    formData.append("contact", [data.name, data.surname, data.patronymic]);
    formData.append("action", "send_data")

    await fetch("https://test-job.pixli.app/send.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <div className="switch">
            <div className="switch__form" tabIndex="0">
              Форма
            </div>
            <div className="switch__palette" tabIndex="1">
              Палитра
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__col">
              <div className="form__col-title">Имя</div>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form__input"
                ref={register}
              />
            </div>
            <div className="form__col">
              <div className="form__col-title">Фамилия</div>
              <input
                type="text"
                placeholder="surname"
                name="surname"
                className="form__input"
                ref={register}
              />
            </div>
            <div className="form__col">
              <div className="form__col-title">Отчество</div>
              <input
                type="text"
                placeholder="patronymic"
                name="patronymic"
                className="form__input"
                ref={register}
              />
            </div>
            <div className="form__col">
              <label htmlFor="upload-button" className="upload__label">
                <span className="form__col-title">Фото</span>
                {image.preview ? (
                  <img src={image.preview} alt="" width="60px" height="56px" />
                ) : (
                  <>
                    <div className="svg-img">
                      <Icons
                        name="uploadImg"
                        color="#fff"
                        width="60"
                        height="56"
                        className="svg-img__pic"
                      />
                    </div>
                  </>
                )}
              </label>
              <input
                type="file"
                name="image"
                id="upload-button"
                onChange={handleChange}
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                className="upload-button"
                ref={register}
              />
            </div>
            <input type="submit" value="Сохранить" className="btn"></input>
            <div className="form__col">
              <div className="form__col-title">Response</div>
              <textarea
                className="form__textarea"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
          <div className="palette">
            <SketchPicker />
            <input type="submit" value="Добавить цвет" className="btn"></input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
