import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { axiosList } from "../../redux/modules/axiosSlice";
import { useParams } from "react-router-dom";

export default function MenuDetail() {
  //post 자체를 스테이트에 저장을해줘야한다
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const param = useParams();
  const lists = useSelector((state) => {
    return state.axiosSlice.SOOL;
  });

  console.log(lists);

  useEffect(() => {
    dispatch(axiosList());
  }, [dispatch]);

  useEffect(() => {
    if (lists) {
      setPost(lists.find((item) => item.id == param.id));
    }
  }, [lists]);

  return (
    <WarpDiv>
      <DetailImg src={post?.img} />
      <DetailTextDiv>
        <NameP>{post?.name}</NameP>
        <TitleP>{post?.title}</TitleP>
        <DescP>{post?.desc}</DescP>
      </DetailTextDiv>
    </WarpDiv>
  );
}

const WarpDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-bottom: 1.5px solid rgb(211, 211, 211);
`;

const DetailTextDiv = styled.div`
  width: 500px;
  line-height: 15px;
  display: inline-block;
`;

const DetailImg = styled.img`
  width: 25%;
  height: 400px;
`;

const NameP = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin-top: 10px;
`;

const TitleP = styled.p`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const DescP = styled.p`
  font-size: 15px;
`;
