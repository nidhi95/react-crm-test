import React from "react";

import { useNavigate } from "react-router-dom";
import { postCreate1 } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import useForm from "simple-react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import {
  Stack,
  Column,
  Img,
  Button,
  Row,
  Text,
  CheckBox,
  List,
  Line,
  Input,
  Switch,
  SelectBox,
} from "components";

const AddMeetingPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const form = useForm({ title: "", location: "" });
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };
    postCreate1(req)
      .then((res) => {
        setapiData1(res);

        toast.success("Success!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error.!");
      });
  }
  function handleNavigate2() {
    navigate("/");
  }
  function handleNavigate3() {
    navigate("/");
  }

  return (
    <>
      <Stack className="bg-bluegray_50 font-sourcesanspro h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]">
        <aside className="absolute items-center left-[0] w-[7%]">
          <Column className="">
            <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_group_9.png"
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Button
                className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                shape="icbRoundedBorder4"
                size="2xlIcn"
                variant="icbFillBlue50"
              >
                <Img
                  src="images/img_frame408.png"
                  className="h-[16px] flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                  alt="Frame408"
                />
              </Button>
              <Img
                src="images/img_vector_57.png"
                className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_58.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_59.png"
                className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[32%]"
                alt="Vector"
              />
              <Button className="bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"></Button>
              <Img
                src="images/img_vector_61.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_62.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_63.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[371px] xl:mb-[425px] mb-[478px] 3xl:mb-[573px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                alt="Vector"
              />
            </Column>
          </Column>
        </aside>
        <Column className="absolute items-center justify-end right-[0] w-[93%]">
          <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] w-[100%]">
            <header className="my-[1px] w-[100%]">
              <Row className="items-center w-[100%]">
                <Row className="border border-bluegray_200 border-solid font-sourcesanspro items-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[7%]">
                  <Img
                    src="images/img_vector_64.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="hover:bg-red_600 cursor-pointer hover:font-normal font-semibold mb-[1px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                    All
                  </Text>
                  <Img
                    src="images/img_vector_65.png"
                    className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[13%]"
                    alt="Vector"
                  />
                </Row>
                <Column className="border border-bluegray_200 border-solid font-sourcesanspro 3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]">
                  <Text className="hover:bg-red_600 cursor-pointer hover:font-normal font-normal my-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-bluegray_700 text-gray_400 w-[auto]">
                    Search your CRM...
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[374px] xl:ml-[427px] ml-[481px] 3xl:ml-[577px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  size="lgIcn"
                  variant="icbFillBluegray900"
                >
                  <Img
                    src="images/img_group5_3.png"
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
                    src="images/img_group4_2.png"
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
                    src="images/img_group3_3.png"
                    className="h-[31.09px] flex items-center justify-center lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                    alt="Group3"
                  />
                </Button>
                <Text className="bg-red_600 cursor-pointer flex font-bold font-inter hover:font-normal lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-bluegray_700 text-white_A700 tracking-ls1 w-[auto]">
                  1
                </Text>
                <Column
                  className="common-pointer bg-amber_100 font-inter lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  onClick={handleNavigate3}
                >
                  <Text className="hover:bg-red_600 cursor-pointer font-bold hover:font-normal mb-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 hover:text-bluegray_700 tracking-ls1 w-[auto]">
                    S
                  </Text>
                </Column>
              </Row>
            </header>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-center lg:pr-[642px] xl:pr-[734px] pr-[826px] 3xl:pr-[991px] w-[100%]">
            <Button className="bg-white_A700 border border-indigo_50 border-solid font-normal not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[36%]">
              Activities Dashboard
            </Button>
            <Button
              className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-center w-[19%]"
              size="md"
              variant="OutlineGray201"
            >
              Analytics
            </Button>
            <Button
              className="flex items-center justify-center text-center w-[37%]"
              rightIcon={
                <Img
                  src="images/img_vector_66.png"
                  className="w-[16.01px] h-[16.01px] ml-[15px] text-center lg:w-[12px] lg:h-[13px] lg:ml-[11px] xl:w-[14px] xl:h-[15px] xl:ml-[13px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[18px]"
                  alt="Vector"
                />
              }
              size="md"
              variant="OutlineGray201"
            >
              <div className="bg-transparent font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701">
                Sales Dashboard
              </div>
            </Button>
            <Img
              src="images/img_vector_67.png"
              className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="Vector"
            />
          </Row>
          <Row className="justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]">
            <Column className="bg-white_A700 items-center lg:mb-[32px] xl:mb-[37px] mb-[42px] 3xl:mb-[50px] lg:py-[25px] xl:py-[29px] py-[33px] 3xl:py-[39px] rounded-radius8 w-[66%]">
              <Column className="font-inter w-[94%]">
                <Row className="items-center w-[100%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
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
                  <Row className="bg-gray_50 border border-gray_201 border-solid font-sourcesanspro items-center justify-center lg:ml-[338px] xl:ml-[386px] ml-[435px] 3xl:ml-[522px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[14%]">
                    <Img
                      src="images/img_addtask1_1.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="addtask1"
                    />
                    <Text className="font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Add task
                    </Text>
                  </Row>
                  <Row className="bg-gray_50 border border-gray_201 border-solid font-sourcesanspro items-center justify-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[17%]">
                    <Img
                      src="images/img_vector_68.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      Add meeting
                    </Text>
                  </Row>
                  <Stack className="bg-gray_50 border border-gray_201 border-solid lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[4%]">
                    <Img
                      src="images/img_morevertical_4.png"
                      className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] justify-center m-[auto] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="morevertical"
                    />
                  </Stack>
                </Row>
                <Row className="font-sourcesanspro items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] pr-[0] w-[41%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Showing all
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    All Activities
                  </Text>
                  <Img
                    src="images/img_vector_69.png"
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
                    src="images/img_vector_70.png"
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] w-[2%]"
                    alt="Vector"
                  />
                </Row>
              </Column>
              <Row className="border border-gray_201 border-solid font-sourcesanspro items-center justify-end lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                <CheckBox
                  className="font-normal my-[2px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  name="Selectall"
                  label="Select all"
                  shape="RoundedBorder2"
                  variant="OutlineBluegray51"
                ></CheckBox>
                <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[7%]">
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    shape="icbRoundedBorder4"
                    size="mdIcn"
                    variant="icbFillBlue800"
                  >
                    <Img
                      src="images/img_group44_1.png"
                      className="flex items-center justify-center"
                      alt="Group44"
                    />
                  </Button>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Open
                  </Text>
                </Row>
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
              <Text className="font-semibold font-sourcesanspro lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                Find your upcoming tasks, meetings and reminders here
              </Text>
              <List
                className="font-sourcesanspro lg:gap-[42px] xl:gap-[48px] gap-[54.00px] 2xl:gap-[54px] 3xl:gap-[64px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] lg:mb-[245px] xl:mb-[281px] mb-[316px] 3xl:mb-[379px] min-h-[auto] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[86%]"
                orientation="horizontal"
              >
                <Column className="items-center mt-[3px] w-[100%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Bring your emails into CRM
                  </Text>
                  <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    Select your email provider
                  </Text>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Button
                      className="bg-gray_50 flex items-center justify-center text-center w-[19%]"
                      leftIcon={
                        <Img
                          src="images/img_gmail_svg_1.png"
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
                    <Row className="bg-gray_50 border border-gray_201 border-solid items-center justify-end lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[25%]">
                      <Stack className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] w-[18%]">
                        <Stack className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] right-[0] w-[87%]">
                          <Stack className="absolute bottom-[0] lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]">
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] px-[0] top-[0] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_10.png')",
                              }}
                            >
                              <Img
                                src="images/img_vector_71.png"
                                className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] top-[0] w-[92%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] px-[0] top-[0] w-[92%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_11.png')",
                              }}
                            >
                              <Img
                                src="images/img_vector_72.png"
                                className="absolute bottom-[0] h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] w-[100%]"
                                alt="Vector"
                              />
                            </Stack>
                          </Stack>
                          <Img
                            src="images/img_vector_73.png"
                            className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] right-[0] top-[0] w-[46%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[0] top-[0] w-[60%]"
                          style={{
                            backgroundImage: "url('images/img_group12.png')",
                          }}
                        >
                          <Img
                            src="images/img_vector_74.png"
                            className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[100%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] w-[40%]"
                          style={{
                            backgroundImage: "url('images/img_group13.png')",
                          }}
                        >
                          <Img
                            src="images/img_vector_75.png"
                            className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[100%]"
                            alt="Vector"
                          />
                        </Stack>
                      </Stack>
                      <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                        Office 365
                      </Text>
                    </Row>
                    <Button
                      className="bg-gray_50 flex items-center justify-center text-center w-[23%]"
                      leftIcon={
                        <Img
                          src="images/img_outlook_logo_1.png"
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
                          src="images/img_vector_76.png"
                          className="w-[13.99px] mr-[3px] bg-gradient  text-center lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
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
                <Column className="items-center mt-[3px] w-[100%]">
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
                          src="images/img_googlecalendar_1_1.png"
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
                    <Row className="bg-gray_50 border border-gray_201 border-solid items-center justify-end lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[39%]">
                      <Stack className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] w-[18%]">
                        <Stack className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] right-[0] w-[87%]">
                          <Stack className="absolute bottom-[0] lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]">
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] px-[0] top-[0] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_14.png')",
                              }}
                            >
                              <Img
                                src="images/img_vector_77.png"
                                className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] top-[0] w-[92%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] px-[0] top-[0] w-[92%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_15.png')",
                              }}
                            >
                              <Img
                                src="images/img_vector_78.png"
                                className="absolute bottom-[0] h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] w-[100%]"
                                alt="Vector"
                              />
                            </Stack>
                          </Stack>
                          <Img
                            src="images/img_vector_79.png"
                            className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] right-[0] top-[0] w-[46%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[0] top-[0] w-[60%]"
                          style={{
                            backgroundImage: "url('images/img_group14_1.png')",
                          }}
                        >
                          <Img
                            src="images/img_vector_80.png"
                            className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] w-[100%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] w-[40%]"
                          style={{
                            backgroundImage: "url('images/img_group15_1.png')",
                          }}
                        >
                          <Img
                            src="images/img_vector_81.png"
                            className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[100%]"
                            alt="Vector"
                          />
                        </Stack>
                      </Stack>
                      <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
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
                <Row className="absolute bg-gray_50 border border-gray_201 border-solid items-center justify-center left-[26%] p-[4px] rounded-radius4 w-[39%]">
                  <Img
                    src="images/img_vector_82.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="Vector"
                  />
                  <Text className="font-normal xl:mx-[10px] mx-[12px] 3xl:mx-[14px] lg:mx-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Configure widgets
                  </Text>
                </Row>
              </Stack>
              <Column className="bg-white_A700 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius8 w-[100%]">
                <Row className="items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mr-[196px] xl:mr-[225px] mr-[253px] 3xl:mr-[303px] w-[37%]">
                  <Img
                    src="images/img_group3_4.png"
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
                    src="images/img_vector_83.png"
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
                      src="images/img_vector_84.png"
                      className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] my-[4px] w-[2%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_85.png"
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
        <Column className="absolute bg-gray_900_d8 items-end lg:pl-[437px] xl:pl-[499px] pl-[562px] 3xl:pl-[674px] w-[100%]">
          <Column className="bg-white_A700 items-center w-[100%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              wrapClassName="flex w-[100%]"
              name="Frame413"
              placeholder="Add Meeting"
              suffix={
                <Img
                  src="images/img_vector_86.png"
                  className="w-[16.01px] h-[16.01px] ml-[35px] mr-[20px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[15px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[17px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] 3xl:mr-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              size="lg"
              variant="OutlineIndigo50"
            ></Input>
            <Row className="justify-between w-[98%]">
              <Column className="lg:mb-[160px] xl:mb-[183px] mb-[206px] 3xl:mb-[247px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] pb-[1px] w-[64%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    Title{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  onChange={(e) => {
                    form.handleChange("title", e.target.value);
                  }}
                  value={form?.values?.title}
                  name="InputField"
                  placeholder="Enter title of meeting"
                  suffix={
                    <Img
                      src="images/img_vector_87.png"
                      className="w-[13.33px] h-[13.33px] ml-[35px] mr-[15px] lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[11px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[18px] my-[auto]"
                      alt="Vector"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
                <Row className="justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Column className="w-[23%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-sourcesanspro">
                        From
                      </span>
                      <span className="text-red_700 font-sourcesanspro">*</span>
                    </Text>
                    <Button
                      className="3xl:pl-[19px] 3xl:pr-[20px] 3xl:py-[9px] border border-gray_201 border-solid flex items-center justify-center lg:pl-[12px] lg:pr-[13px] lg:py-[6px] mt-[4px] pl-[16px] pr-[17px] py-[8px] rounded-radius4 text-center w-[100%] xl:pl-[14px] xl:pr-[15px] xl:py-[7px]"
                      rightIcon={
                        <Img
                          src="images/img_vector_88.png"
                          className="w-[16.67px] h-[16.67px] ml-[12px] text-center lg:w-[12px] lg:h-[13px] lg:ml-[9px] xl:w-[14px] xl:h-[15px] xl:ml-[10px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[14px]"
                          alt="Vector"
                        />
                      }
                    >
                      <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                        06/28/2022
                      </div>
                    </Button>
                  </Column>
                  <Row className="border border-gray_201 border-solid items-center justify-center lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[23%]">
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      09:40
                    </Text>
                    <Img
                      src="images/img_vector_89.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Row>
                  <Column className="w-[23%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-sourcesanspro">
                        To
                      </span>
                      <span className="text-red_700 font-sourcesanspro">*</span>
                    </Text>
                    <Button
                      className="3xl:pl-[19px] 3xl:pr-[20px] 3xl:py-[9px] border border-gray_201 border-solid flex items-center justify-center lg:pl-[12px] lg:pr-[13px] lg:py-[6px] mt-[4px] pl-[16px] pr-[17px] py-[8px] rounded-radius4 text-center w-[100%] xl:pl-[14px] xl:pr-[15px] xl:py-[7px]"
                      rightIcon={
                        <Img
                          src="images/img_vector_90.png"
                          className="w-[16.67px] h-[16.67px] ml-[12px] text-center lg:w-[12px] lg:h-[13px] lg:ml-[9px] xl:w-[14px] xl:h-[15px] xl:ml-[10px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[14px]"
                          alt="Vector"
                        />
                      }
                    >
                      <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                        06/28/2022
                      </div>
                    </Button>
                  </Column>
                  <Row className="border border-gray_201 border-solid items-center justify-between lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[23%]">
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      09:40
                    </Text>
                    <Img
                      src="images/img_vector_91.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Row>
                </Row>
                <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[19%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    All Day
                  </Text>
                  <Switch
                    onColor="#eaecf0"
                    offColor="#eaecf0"
                    onHandleColor="#f4f8fd"
                    offHandleColor="#f4f8fd"
                    value={false}
                    className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]"
                  />
                </Row>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Time zone
                </Text>
                <SelectBox
                  className="bg-transparent font-normal mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]"
                  placeholderClassName="bg-transparent text-bluegray_901"
                  name="Frame418"
                  placeholder="(GMT+00:00) UTC"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_92.png"
                      className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="utlineGray201"
                ></SelectBox>
                <SelectBox
                  className="bg-gray_50 border border-gray_201 border-solid font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[37%]"
                  placeholderClassName="bg-transparent text-bluegray_701"
                  name="Frame418"
                  placeholder="Add video conferencing"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_93.png"
                      className="w-[10.4px] h-[6.2px] mr-[22px] lg:w-[8px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[19px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[26px]"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Location
                </Text>
                <SelectBox
                  className="bg-transparent font-normal mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_201 w-[100%]"
                  onChange={(e) => {
                    form.handleChange("location", e);
                  }}
                  value={form?.values?.location}
                  placeholderClassName="bg-transparent text-bluegray_201"
                  name="Frame418"
                  placeholder="Enter location meeting"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_94.png"
                      className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="utlineGray201"
                ></SelectBox>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Description
                </Text>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid mt-[4px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius4 w-[100%]">
                  <Text className="font-normal 3xl:mb-[108px] lg:mb-[70px] xl:mb-[80px] mb-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_201 w-[auto]">
                    Start typing the details about the meeting
                  </Text>
                </Column>
                <Row className="items-center ml-[2px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[21%]">
                  <Img
                    src="images/img_vector_95.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    Add outcome
                  </Text>
                </Row>
                <Row className="items-center ml-[2px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[27%]">
                  <Img
                    src="images/img_vector_96.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    Add meeting notes
                  </Text>
                </Row>
              </Column>
              <Column className="bg-gray_100 border border-gray_201 border-solid lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[34%]">
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Related to
                </Text>
                <SelectBox
                  className="bg-white_A700 font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_201 w-[94%]"
                  placeholderClassName="bg-transparent text-bluegray_201"
                  name="Frame418"
                  placeholder="Link this meeting to.."
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_97.png"
                      className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="utlineGray201"
                ></SelectBox>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Attendees (1)
                </Text>
                <Stack className="bg-white_A700 border border-gray_201 border-solid lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[4px] lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] rounded-radius4 w-[94%]">
                  <Img
                    src="images/img_vector_98.png"
                    className="absolute lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] inset-y-[0] my-[auto] right-[2%] w-[4%]"
                    alt="Vector"
                  />
                </Stack>
                <Row className="items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[91%]">
                  <Img
                    src="images/img_vector_99.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    Attendees will get an email invitation
                  </Text>
                </Row>
                <Row className="bg-bluegray_51 border border-gray_201 border-solid items-center lg:mb-[477px] xl:mb-[546px] mb-[614px] 3xl:mb-[737px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[67%]">
                  <Text className="bg-amber_100 flex font-bold font-inter lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-amber_500 tracking-ls1 w-[auto]">
                    J
                  </Text>
                  <Text className="font-normal font-sourcesanspro ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Img
                    src="images/img_vector_100.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="Vector"
                  />
                </Row>
              </Column>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
              <Button
                className="common-pointer bg-white_A700 font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[9%]"
                onClick={handleNavigate2}
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer bg-bluegray_900 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[7%]"
                onClick={() => {
                  form.handleSubmit(callApi1);
                }}
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Column>
      </Stack>

      <ToastContainer />
    </>
  );
};

export default AddMeetingPage;
