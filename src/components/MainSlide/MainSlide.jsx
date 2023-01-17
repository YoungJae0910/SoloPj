import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import soolungBnr1 from "../../assets/soolung-bnr-1.jpg";
import soolungBnr2 from "../../assets/soolung-bnr-2.jpg";
import soolungBnr3 from "../../assets/soolung-bnr-3.jpg";

export default function MainSlide() {
  const settings = {
    dots: true,
    lazyLoad: true, // 필요에 따라 또는 점진적으로 이미지를 로드하거나 구성 요소를 렌더링합니다.
    infinite: true, //무한으로돌것인가?
    speed: 1000, //1000 == 1s 슬라이드가 넘어가는 시간
    slidesToShow: 1, //몇개를 보여줄것인가
    slidesToScroll: 1, // 몇개를 넘길것인가
    initialSlide: 1, //첫 번째 슬라이드의 인덱스
    autoplay: 1000, //1000 == 1s 자동으로 넘어가는 시간
  };

  return (
    // 케러셀 자동슬라이드
    <WarpDiv>
      <MainSlider {...settings}>
        <ImgDiv>
          <MainImg src={soolungBnr1} alt="배너1" srcSet="" />
        </ImgDiv>
        <ImgDiv>
          <MainImg src={soolungBnr2} alt="배너1" srcSet="" />
        </ImgDiv>
        <ImgDiv>
          <MainImg src={soolungBnr3} alt="배너1" srcSet="" />
        </ImgDiv>
      </MainSlider>
    </WarpDiv>
  );
}

const WarpDiv = styled.div`
  width: 100%;
  height: 480px;
  background-color: gray;
`;

const MainSlider = styled(Slider)`
  height: 100%;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 480px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 480px;
`;
