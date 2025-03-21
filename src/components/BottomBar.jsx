import { useNavigate } from "react-router-dom";
import Parker_Logo from "./../assets/LogoImage.svg";
import Crackdown from "./../assets/Bottom_Button/BT_Crackdown.svg";
import SavedParkingSpaces from "./../assets/Bottom_Button/BT_SavedParkingSpaces.svg";
import ParkingSpaces from "./../assets/Bottom_Button/BT_ParkingSpaces.svg";
import ParkInfo from "./../assets/Bottom_Button/BT_ParkInfo.svg";
import Report from "./../assets/ReportButton.svg";
import { MdMyLocation } from "react-icons/md";
import { styled } from "styled-components";
import { useState } from "react";
import CustomModal from "./Modals/CustomModal";
import ReportContent from "./Modals/ReportContent";

const BottomBar = ({ onGetLocation }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <BottombarDiv>
        <LeftGroup>
          <button onClick={() => navigate("/crackdown")}>
            <img src={Crackdown} alt="Crackdown" />
          </button>
          <button onClick={() => navigate("/report")}>
            <img src={ParkingSpaces} alt="ParkingSpaces" />
          </button>
        </LeftGroup>
        <MainButton onClick={() => navigate("/mypage")}>
          <img src={Parker_Logo} alt="Parker_Logo" />
        </MainButton>
        <RightGroup>
          <button onClick={() => navigate("/bookmark")}>
            <img src={SavedParkingSpaces} alt="SavedParkingSpaces" />
          </button>
          <button onClick={() => navigate("/parkinginfo")}>
            <img src={ParkInfo} alt="ParkInforch_Button" />
          </button>
        </RightGroup>
      </BottombarDiv>
      <LocationButton onClick={onGetLocation}>
        <MdMyLocation color="#636363" size={30} />
      </LocationButton>
      <ReportButton onClick={handleModalOpen}>
        <img src={Report} alt="Report" />
      </ReportButton>

      <CustomModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <ReportContent currentLocation="현재위치" />
      </CustomModal>
    </div>
  );
};

export default BottomBar;

const BottombarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 2px;
  margin: 15px 0;
  background-color: #ffffff;
  border-radius: 35px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  width: 85%;
  max-width: 600px;
  height: 20px;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2%;
  margin-right: 10px;

  button {
    background-color: #ffffff;
    margin: 0 5%;
    border: none;
    padding: 7%;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    img {
      width: 26px;
    }
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding-right: 2%;
  margin-left: 10%;

  button {
    background-color: #ffffff;
    margin: 0 5%;
    border: none;
    padding: 7%;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    img {
      width: 26px;
    }
  }
`;

const MainButton = styled.button`
  position: absolute;
  background-color: #ffffff;
  border: none;
  width: 85px;
  height: 85px;
  top: -33px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  z-index: 15;

  img {
    width: 60%;
  }
`;

const LocationButton = styled.button`
  display: flex;
  position: absolute;
  background-color: #ffffff;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: 8%;
  width: 42px;
  height: 42px;
  bottom: 95px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

const ReportButton = styled.button`
  display: flex;
  position: absolute;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  right: 8%;
  width: 50px;
  height: 50px;
  bottom: 95px;
  z-index: 5;
  cursor: pointer;

  img {
    width: 85px;
    height: 85px;
  }
`;
