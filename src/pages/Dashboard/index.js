import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Button,
  SelectBox,
  Input,
  Text,
  Line,
  Stack,
  CheckBox,
  List,
} from "components";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/tasks");
  }
  function handleNavigate2() {
    navigate("/tasks");
  }
  function handleNavigate3() {
    navigate("/products");
  }
  function handleNavigate4() {
    navigate("/addmeeting");
  }
  function handleNavigate5() {
    navigate("/addtask");
  }

  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center justify-end mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[7%]">
            <Column className="">
              <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_logo.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Logo"
                />
                <Button
                  className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder4"
                  size="2xlIcn"
                  variant="icbFillBlue50"
                >
                  <Img
                    src="images/img_group177.png"
                    className="h-[16px] flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Group177"
                  />
                </Button>
                <Img
                  src="images/img_vector_28.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_29.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_30.png"
                  className="common-pointer lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[32%]"
                  onClick={handleNavigate3}
                  alt="Vector"
                />
                <Button
                  className="common-pointer bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"
                  onClick={handleNavigate2}
                ></Button>
                <Img
                  src="images/img_vector_32.png"
                  className="common-pointer lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  onClick={handleNavigate1}
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_33.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_34.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[371px] xl:mb-[425px] mb-[478px] 3xl:mb-[573px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                  alt="Vector"
                />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[93%]">
            <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] w-[100%]">
              <SelectBox
                className="bg-transparent font-semibold p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
                placeholderClassName="bg-transparent text-bluegray_700"
                name="Group187"
                placeholder="All"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_36.png"
                    className="w-[10.54px] h-[6.25px] mr-[12px] lg:w-[8px] lg:h-[5px] lg:mr-[9px] xl:w-[9px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                    alt="Vector"
                  />
                }
                shape="ustomBorder"
                size="sm"
                variant="utlineBluegray200"
              ></SelectBox>
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                wrapClassName="w-[34%]"
                name="Group94"
                placeholder="Search your CRM..."
                shape="CustomBorder"
                size="md"
                variant="OutlineBluegray200"
              ></Input>
              <Button
                className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                size="lgIcn"
                variant="icbFillBluegray900"
              >
                <Img
                  src="images/img_group5_1.png"
                  className="h-[16px] flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                  alt="Group5"
                />
              </Button>
              <Button
                className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                size="lgIcn"
                variant="icbOutlineGray200"
              >
                <Img
                  src="images/img_group4_1.png"
                  className="flex items-center justify-center"
                  alt="Group4"
                />
              </Button>
              <Button
                className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                size="smIcn"
                variant="icbOutlineGray200"
              >
                <Img
                  src="images/img_group3_1.png"
                  className="h-[31.09px] flex items-center justify-center lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                  alt="Group3"
                />
              </Button>
              <Button
                className="flex lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                shape="icbCircleBorder"
                size="lgIcn"
                variant="icbFillRed600"
              >
                <Img
                  src="images/img_group100.png"
                  className="flex items-center justify-center"
                  alt="Group100"
                />
              </Button>
              <Button
                className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                size="lgIcn"
                variant="icbFillAmber100"
              >
                <Img
                  src="images/img_group99.png"
                  className="flex items-center justify-center"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] w-[100%]">
              <Button className="bg-white_A700 font-normal mb-[1px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[14%]">
                Activities Dashboard
              </Button>
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                Analytics
              </Text>
              <Line className="bg-gray_201 h-[1px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] rotate-[90deg] w-[1px]" />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                Sales Dashboard
              </Text>
              <Img
                src="images/img_vector_37.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
              <Line className="bg-gray_201 h-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rotate-[90deg] w-[1px]" />
              <Img
                src="images/img_vector_38.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
            </Row>
            <Row className="justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]">
              <Column className="bg-white_A700 items-center lg:mb-[32px] xl:mb-[37px] mb-[42px] 3xl:mb-[50px] lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius8 w-[66%]">
                <Column className="w-[95%]">
                  <Row className="w-[100%]">
                    <Text className="font-inter font-medium lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                      <span className="text-bluegray_901 font-sourcesanspro font-light">
                        Hey
                      </span>
                      <span className="text-bluegray_901 font-sourcesanspro font-normal">
                        {" "}
                      </span>
                      <span className="text-bluegray_901 font-sourcesanspro font-semibold">
                        Jemee!
                      </span>
                    </Text>
                    <Button
                      className="3xl:ml-[570px] 3xl:p-[9px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-center lg:ml-[369px] lg:p-[6px] ml-[475px] p-[8px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] text-center w-[12%] xl:ml-[422px] xl:p-[7px]"
                      onClick={handleNavigate5}
                      leftIcon={
                        <Img
                          src="images/img_addtask_1.png"
                          className="w-[20px] h-[20px] mr-[10px] text-center lg:w-[15px] lg:h-[16px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                          alt="add-task 1"
                        />
                      }
                    >
                      <div className="common-pointer bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                        Add task
                      </div>
                    </Button>
                    <Button
                      className="3xl:pl-[12px] 3xl:pr-[10px] 3xl:py-[9px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-center lg:px-[7px] lg:py-[6px] pl-[10px] pr-[9px] py-[8px] text-center w-[15%] xl:px-[8px] xl:py-[7px]"
                      onClick={handleNavigate4}
                      leftIcon={
                        <Img
                          src="images/img_vector_39.png"
                          className="w-[16.67px] h-[16.67px] mr-[11px] text-center lg:w-[12px] lg:h-[13px] lg:mr-[8px] xl:w-[14px] xl:h-[15px] xl:mr-[9px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:mr-[13px]"
                          alt="Vector"
                        />
                      }
                    >
                      <div className="common-pointer bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                        Add meeting
                      </div>
                    </Button>
                    <Stack className="bg-gray_50 border border-gray_201 border-solid lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[4%]">
                      <Img
                        src="images/img_morevertical_3.png"
                        className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] justify-center m-[auto] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="morevertical"
                      />
                    </Stack>
                  </Row>
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] pr-[0] w-[41%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      Showing all
                    </Text>
                    <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      All Activities
                    </Text>
                    <Img
                      src="images/img_vector_40.png"
                      className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] ml-[4px] w-[2%]"
                      alt="Vector"
                    />
                    <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      for
                    </Text>
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      Today jun 27
                    </Text>
                    <Img
                      src="images/img_vector_41.png"
                      className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] w-[2%]"
                      alt="Vector"
                    />
                  </Row>
                </Column>
                <Row className="border border-gray_201 border-solid items-center justify-end lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <CheckBox
                    className="font-normal my-[2px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Selectall"
                    label="Select all"
                    shape="RoundedBorder2"
                    variant="OutlineBluegray51"
                  ></CheckBox>
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    shape="icbRoundedBorder4"
                    size="mdIcn"
                    variant="icbFillBlue800"
                  >
                    <Img
                      src="images/img_group44.png"
                      className="flex items-center justify-center"
                      alt="Group44"
                    />
                  </Button>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Open
                  </Text>
                  <CheckBox
                    className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Overdue"
                    label="Overdue"
                    shape="RoundedBorder2"
                    variant="OutlineBluegray51"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Completed"
                    label="Completed"
                    shape="RoundedBorder2"
                    variant="OutlineBluegray51"
                  ></CheckBox>
                  <Text className="font-normal lg:ml-[223px] xl:ml-[255px] ml-[287px] 3xl:ml-[344px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    All tasks and meetings
                  </Text>
                </Row>
                <Text className="font-semibold lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                  Find your upcoming tasks, meetings and reminders here
                </Text>
                <List
                  className="lg:gap-[38px] xl:gap-[44px] gap-[50.00px] 2xl:gap-[50px] 3xl:gap-[60px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] lg:mb-[246px] xl:mb-[281px] mb-[317px] 3xl:mb-[380px] min-h-[auto] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[85%]"
                  orientation="horizontal"
                >
                  <Column className="w-[100%]">
                    <Text className="font-semibold 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] mr-[110px] 3xl:mr-[132px] lg:mr-[85px] xl:mr-[97px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Bring your emails into CRM
                    </Text>
                    <Text className="font-normal ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] xl:mr-[111px] mr-[125px] 3xl:mr-[150px] lg:mr-[97px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      Select your email provider
                    </Text>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Button
                        className="bg-gray_50 flex items-center justify-center text-center w-[19%]"
                        leftIcon={
                          <Img
                            src="images/img_gmail_svg.png"
                            className="w-[20px] mr-[4px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                            alt="Gmail svg"
                          />
                        }
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineGray201"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                          Gmail
                        </div>
                      </Button>
                      <Row className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius4 w-[25%]">
                        <Stack className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] ml-[4px] w-[17%]">
                          <Stack className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] right-[0] w-[87%]">
                            <Stack className="absolute bottom-[0] lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]">
                              <Stack
                                className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] px-[0] top-[0] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_1.png')",
                                }}
                              >
                                <Img
                                  src="images/img_vector_42.png"
                                  className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] top-[0] w-[92%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack
                                className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] px-[0] top-[0] w-[92%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_2.png')",
                                }}
                              >
                                <Img
                                  src="images/img_vector_43.png"
                                  className="absolute bottom-[0] h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                            <Img
                              src="images/img_vector_44.png"
                              className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] right-[0] top-[0] w-[46%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[0] top-[0] w-[60%]"
                            style={{
                              backgroundImage: "url('images/img_group5_2.png')",
                            }}
                          >
                            <Img
                              src="images/img_vector_45.png"
                              className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] w-[40%]"
                            style={{
                              backgroundImage: "url('images/img_group6.png')",
                            }}
                          >
                            <Img
                              src="images/img_vector_46.png"
                              className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                        <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mr-[2px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                          Office 365
                        </Text>
                      </Row>
                      <Button
                        className="bg-gray_50 flex items-center justify-center text-center w-[23%]"
                        leftIcon={
                          <Img
                            src="images/img_outlook_logo.png"
                            className="w-[20px] h-[20px] mr-[4px] text-center lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                            alt="Outlook logo"
                          />
                        }
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineGray201"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                          Outlook
                        </div>
                      </Button>
                      <Button
                        className="bg-gray_50 flex items-center justify-center text-center w-[21%]"
                        leftIcon={
                          <Img
                            src="images/img_vector_47.png"
                            className="w-[13.99px] mr-[7px] text-center lg:w-[10px] lg:mr-[5px] xl:w-[12px] xl:mr-[6px] 2xl:w-[13px] 3xl:w-[16px] 3xl:mr-[8px]"
                            alt="Vector"
                          />
                        }
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineGray201"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                          Others
                        </div>
                      </Button>
                    </Row>
                  </Column>
                  <Line className="self-center w-[1px] h-[1px] rotate-[90deg] bg-bluegray_51" />
                  <Column className="items-center w-[100%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Bring your emails into CRM
                    </Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      Select your email provider
                    </Text>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Button
                        className="bg-gray_50 flex items-center justify-center text-center w-[55%]"
                        leftIcon={
                          <Img
                            src="images/img_googlecalendar_1.png"
                            className="w-[20px] h-[20px] mr-[4px] text-center lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                            alt="google-calendar 1"
                          />
                        }
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineGray201"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                          Google Calender
                        </div>
                      </Button>
                      <Row className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius4 w-[39%]">
                        <Stack className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] ml-[4px] w-[17%]">
                          <Stack className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] right-[0] w-[87%]">
                            <Stack className="absolute bottom-[0] lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]">
                              <Stack
                                className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] px-[0] top-[0] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_7.png')",
                                }}
                              >
                                <Img
                                  src="images/img_vector_48.png"
                                  className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] top-[0] w-[92%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack
                                className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] px-[0] top-[0] w-[92%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_8.png')",
                                }}
                              >
                                <Img
                                  src="images/img_vector_49.png"
                                  className="absolute bottom-[0] h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                            <Img
                              src="images/img_vector_50.png"
                              className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] right-[0] top-[0] w-[46%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[0] top-[0] w-[60%]"
                            style={{
                              backgroundImage: "url('images/img_group7_1.png')",
                            }}
                          >
                            <Img
                              src="images/img_vector_51.png"
                              className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] w-[40%]"
                            style={{
                              backgroundImage: "url('images/img_group8_1.png')",
                            }}
                          >
                            <Img
                              src="images/img_vector_52.png"
                              className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                        <Text className="font-normal mb-[1px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mr-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                          Office 365
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </List>
              </Column>
              <Column className="items-center w-[33%]">
                <Stack className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                  <Line className="absolute bg-bluegray_400 h-[1px] inset-y-[48%] w-[100%]" />
                  <Button
                    className="3xl:ml-[133px] absolute bg-gray_50 flex items-center justify-center left-[26%] lg:ml-[86px] ml-[111px] text-center w-[39%] xl:ml-[98px]"
                    leftIcon={
                      <Img
                        src="images/img_vector_53.png"
                        className="w-[16.37px] mr-[12px] text-center right-[3%] absolute lg:w-[12px] lg:mr-[9px] xl:w-[14px] xl:mr-[10px] 2xl:w-[16px] 3xl:w-[19px] 3xl:mr-[14px]"
                        alt="Vector"
                      />
                    }
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineGray201"
                  >
                    <div className="bg-transparent font-normal left-[0] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                      Configure widgets
                    </div>
                  </Button>
                </Stack>
                <Column className="bg-white_A700 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius8 w-[100%]">
                  <Row className="items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mr-[196px] xl:mr-[225px] mr-[253px] 3xl:mr-[303px] w-[37%]">
                    <Img
                      src="images/img_group3_2.png"
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      Freddy AI Insights
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_51 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Text className="font-normal lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    Freddy doesn’t have any insights for now. But it will soon
                  </Text>
                </Column>
                <Column className="bg-white_A700 items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 w-[100%]">
                  <Row className="justify-between w-[92%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                      My calender
                    </Text>
                    <Img
                      src="images/img_vector_54.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] my-[2px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Row>
                  <Line className="bg-bluegray_51 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  <Column className="lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      Today
                    </Text>
                    <Row className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pt-[1px] w-[100%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        27 Jun
                      </Text>
                      <Img
                        src="images/img_vector_55.png"
                        className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] my-[4px] w-[2%]"
                        alt="Vector"
                      />
                      <Img
                        src="images/img_vector_56.png"
                        className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[4px] w-[2%]"
                        alt="Vector"
                      />
                      <Text className="font-normal lg:ml-[161px] xl:ml-[184px] ml-[207px] 3xl:ml-[248px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                        Show today
                      </Text>
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        08:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        09:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Line className="bg-red_700 h-[1px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[87%]" />
                    <Row className="items-center justify-between ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        10:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        11:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        12:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        13:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                    <Row className="items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        14:00
                      </Text>
                      <Line className="bg-bluegray_100 h-[1px] w-[88%]" />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardPage;
