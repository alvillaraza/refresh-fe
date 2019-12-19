import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";


const SurveyForm = () => {
  const [form, setForm] = useState({});
  console.log(form)
  //   const [questions, setQuestions] = useState([]);

  const handleChange = e => {
    setForm({ ...form,
      [e.target.name]: e.target.value
    });
  };

  //   const handleQuestions = () => {
  //       setQuestions([...questions, e.])
  //   }

  const handleSubmit = e => {
      e.preventDefault();
      console.log("form before object", form)
    
    Object.keys(form).forEach(key => {
      if (key.includes("question")) {
         
        form.question_ids=[...(form[key])];
      }
    });
     console.log("form", form);
    e.preventDefault();
    axiosWithAuth()
      .post("https://apidevnow.com/questiongroups", form)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label>SURVEY NAME</label>
        <input
          type="text"
          name="name"
          placeholder="Create a name for this mission"
          onChange={handleChange}
        />
        <label>SURVEY DESCRIPTION</label>
        <input
          type="text"
          name="description"
          placeholder="Add a description for your mission..."
          onChange={handleChange}
        />
        <label>QUESTION 1</label>
        <input
          type="text"
          name="question_1"
          placeholder="What question would you like to ask?"
          onChange={handleChange}
        />
        <label>QUESTION TYPE</label>
        <select id="question_type">
          <option value="">Please Select One</option>
          <option value="multiple choice">Multiple Choice</option>
          <option value="slider">Slider</option>
          <option value="text reply">Text Reply</option>
        </select>
        <button type="submit">Submit</button>
      </StyledForm>
    </StyledWrapper>
    //styled comp
  );
};

const StyledForm = styled.form`
  flex-direction: column;
  margin-top: 25%;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
`;

export default SurveyForm;
