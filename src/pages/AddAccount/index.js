import React from "react";

import {
  Stack,
  Column,
  Img,
  Button,
  Row,
  Text,
  SelectBox,
  List,
  Input,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";
import { postCreate } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import useForm from "simple-react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { CloseSVG } from "../../assets/images/index.js";

const AddAccountPage = () => {
  const [apiData2, setapiData2] = React.useState();
  const form = useForm({ name: "", website: "", phone: "" });
  const navigate = useNavigate();

  function callApi2(data) {
    const req = { data: { ...data } };
    postCreate(req)
      .then((res) => {
        setapiData2(res);

        toast.success("Success.!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error.! PLease try again.!");
      });
  }
  function handleNavigate4() {
    navigate("/account");
  }
  function handleNavigate5() {
    navigate("/account");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-bluegray_50 font-sourcesanspro h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]">
        <aside className="absolute items-center left-[0] w-[7%]">
          <Column className="">
            <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_group.png"
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Img
                src="images/img_vector.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_1.png"
                className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                alt="Vector"
              />
              <Button
                className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                shape="icbRoundedBorder4"
                size="xlIcn"
                variant="icbFillBlue50"
              >
                <Img
                  src="images/img_frame410.png"
                  className="flex items-center justify-center"
                  alt="Frame410"
                />
              </Button>
              <Img
                src="images/img_vector_2.png"
                className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[32%]"
                alt="Vector"
              />
              <Button className="bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"></Button>
              <Img
                src="images/img_vector_4.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_5.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_6.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[356px] xl:mb-[407px] mb-[458px] 3xl:mb-[549px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                alt="Vector"
              />
            </Column>
          </Column>
        </aside>
        <Column className="absolute items-center right-[0] top-[0] w-[93%]">
          <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <header className="w-[100%]">
              <Row className="items-center pr-[1px] w-[100%]">
                <Row className="border border-bluegray_200 border-solid font-sourcesanspro items-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                  <Img
                    src="images/img_vector_7.png"
                    className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] ml-[2px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                    alt="Vector"
                  />
                  <Text className="hover:bg-red_600 cursor-pointer hover:font-normal font-semibold mb-[1px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                    Contacts
                  </Text>
                  <Img
                    src="images/img_vector_8.png"
                    className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[8%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="border border-bluegray_200 border-solid font-sourcesanspro items-center justify-between lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]">
                  <Text className="hover:bg-red_600 cursor-pointer hover:font-normal font-normal ml-[2px] my-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-bluegray_700 text-gray_400 w-[auto]">
                    Search by contact
                  </Text>
                  <Img
                    src="images/img_vector_9.png"
                    className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] mr-[108px] 3xl:mr-[129px] lg:mr-[84px] xl:mr-[96px] w-[2%]"
                    alt="Vector"
                  />
                </Row>
                <Button
                  className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  size="lgIcn"
                  variant="icbFillBluegray900"
                >
                  <Img
                    src="images/img_group5.png"
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
                    src="images/img_group4.png"
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
                    src="images/img_group3.png"
                    className="h-[31.09px] flex items-center justify-center lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                    alt="Group3"
                  />
                </Button>
                <Text className="bg-red_600 cursor-pointer flex font-bold font-inter hover:font-normal lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-bluegray_700 text-white_A700 tracking-ls1 w-[auto]">
                  1
                </Text>
                <Column className="bg-amber_100 font-inter lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                  <Text className="hover:bg-red_600 cursor-pointer font-bold hover:font-normal mb-[1px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 hover:text-bluegray_700 tracking-ls1 w-[auto]">
                    S
                  </Text>
                </Column>
              </Row>
            </header>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
              Accounts
            </Text>
            <Img
              src="images/img_vector_10.png"
              className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[1%]"
              alt="Vector"
            />
            <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
              My Accounts (03)
            </Text>
            <Button
              className="3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] ml-[16px] text-center w-[10%] xl:ml-[14px]"
              leftIcon={
                <Img
                  src="images/img_vector_11.png"
                  className="w-[20.01px] mr-[11px] text-center lg:w-[15px] lg:mr-[8px] xl:w-[17px] xl:mr-[9px] 2xl:w-[20px] 3xl:w-[24px] 3xl:mr-[13px]"
                  alt="Vector"
                />
              }
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBlue800"
            >
              <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                My Accounts
              </div>
            </Button>
            <Row className="bg-indigo_51 border border-blue_800 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[6%]">
              <Img
                src="images/img_vector_12.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[31%]"
                alt="Vector"
              />
              <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                All
              </Text>
            </Row>
            <SelectBox
              className="bg-bluegray_900 font-normal lg:ml-[262px] xl:ml-[300px] ml-[338px] 3xl:ml-[405px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[10%]"
              placeholderClassName="bg-transparent text-white_A700"
              name="Frame419"
              placeholder="Add account"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_vector_13.png"
                  className="w-[10.4px] h-[6.2px] mr-[22px] lg:w-[8px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[19px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[26px]"
                  alt="Vector"
                />
              }
              shape="oundedBorder4"
              size="sm"
              variant="utlineGray201"
            ></SelectBox>
            <SelectBox
              className="bg-transparent font-normal p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
              placeholderClassName="bg-transparent text-bluegray_701"
              name="Frame418"
              placeholder="Edit coumns"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_vector_15.png"
                  className="w-[10.4px] h-[6.2px] mr-[22px] lg:w-[8px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[19px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[26px]"
                  alt="Vector"
                />
              }
              shape="oundedBorder4"
              size="sm"
              variant="utlineGray201"
            ></SelectBox>
            <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-center 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[10%]">
              <Img
                src="images/img_vector_16.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="Vector"
              />
              <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                Filters
              </Text>
              <Text className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] px-[4px] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                01
              </Text>
            </Row>
          </Row>
        </Column>
        <Column className="absolute items-center right-[0] top-[12%] w-[93%]">
          <Row className="items-center w-[100%]">
            <Column className="items-center w-[5%]">
              <Column className="bg-gray_100 border border-gray_201 border-solid items-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
              </Column>
            </Column>
            <Column className="items-center w-[19%]">
              <Row className="bg-gray_100 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Name
                </Text>
                <Img
                  src="images/img_vector_17.png"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[4%]"
                  alt="Vector"
                />
              </Row>
              <List
                className="font-inter gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                  <Text className="bg-amber_100 flex font-bold lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                    Je
                  </Text>
                  <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[43%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Jemee
                    </Text>
                    <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                  <Text className="bg-amber_100 flex font-bold lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                    Wi
                  </Text>
                  <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[43%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Widgezts.io
                    </Text>
                    <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                  <Text className="bg-amber_100 flex font-bold lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                    Le
                  </Text>
                  <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[43%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                      Lead
                    </Text>
                    <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                      Jemee Tala
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
            <Column className="items-center w-[12%]">
              <Button
                className="3xl:pl-[14px] 3xl:pr-[8px] 3xl:py-[14px] bg-gray_100 border border-gray_201 border-solid flex items-center justify-center lg:pl-[9px] lg:pr-[5px] lg:py-[9px] pl-[12px] pr-[7px] py-[12px] text-center w-[100%] xl:pl-[10px] xl:pr-[6px] xl:py-[10px]"
                rightIcon={
                  <Img
                    src="images/img_vector_18.png"
                    className="w-[10.01px] ml-[9px] text-center lg:w-[7px] lg:ml-[7px] xl:w-[8px] xl:ml-[8px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[10px]"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase">
                  Open deals amou...
                </div>
              </Button>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-semibold lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]">
                $200
              </Text>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-semibold lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]">
                --
              </Text>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-semibold lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]">
                --
              </Text>
            </Column>
            <Column className="items-center w-[12%]">
              <Row className="bg-gray_100 border border-gray_201 border-solid items-center justify-end p-[2px] w-[100%]">
                <Text className="font-semibold 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  last contacted ti...
                </Text>
                <Img
                  src="images/img_vector_19.png"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[6%]"
                  alt="Vector"
                />
              </Row>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]">
                Not Available
              </Text>
              <Button className="bg-white_A700 border border-gray_201 border-solid font-normal not-italic lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[100%]">
                13 days ago
              </Button>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]">
                Not Available
              </Text>
            </Column>
            <Column className="items-center w-[12%]">
              <Column className="bg-gray_100 border border-gray_201 border-solid xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Related contacts
                </Text>
              </Column>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]">
                --
              </Text>
              <Column className="bg-white_A700 border border-gray_201 border-solid xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Img
                  src="images/img_ellipse10.png"
                  className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius50 w-[auto]"
                  alt="Ellipse10"
                />
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid font-inter xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="bg-amber_100 flex font-bold lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[12%]">
              <Row className="bg-gray_100 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  sales owner
                </Text>
                <Img
                  src="images/img_vector_20.png"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[7%]"
                  alt="Vector"
                />
              </Row>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-normal lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-normal lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-normal lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[12%]">
              <Row className="bg-gray_100 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Website
                </Text>
                <Img
                  src="images/img_vector_21.png"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[7%]"
                  alt="Vector"
                />
              </Row>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[100%]">
                www.dhiwise.com
              </Text>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[100%]">
                widgetz.io
              </Text>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]">
                Not Available
              </Text>
            </Column>
            <Column className="items-center w-[10%]">
              <Row className="bg-gray_100 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                  Work
                </Text>
                <Img
                  src="images/img_vector_22.png"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]"
                  alt="Vector"
                />
              </Row>
              <Column className="bg-white_A700 border border-gray_201 border-solid xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-normal lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
              </Column>
              <Text className="bg-white_A700 border border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[100%]">
                2344566766
              </Text>
              <Column className="bg-white_A700 border border-gray_201 border-solid xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-normal lg:my-[20px] xl:my-[23px] my-[26px] 3xl:my-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]">
                  Not Available
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[4%]">
              <div className="bg-gray_100 border border-gray_201 border-solid lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] w-[100%]"></div>
              <Stack className="bg-white_A700 border border-gray_201 border-solid 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]">
                <Img
                  src="images/img_morevertical.png"
                  className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] left-[0] my-[auto] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Stack>
              <Stack className="bg-white_A700 border border-gray_201 border-solid 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]">
                <Img
                  src="images/img_morevertical_1.png"
                  className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] left-[0] my-[auto] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Stack>
              <Stack className="bg-white_A700 border border-gray_201 border-solid 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]">
                <Img
                  src="images/img_morevertical_2.png"
                  className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] left-[0] my-[auto] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Stack>
            </Column>
          </Row>
          <Input
            className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
            wrapClassName="bg-white_A700 w-[100%]"
            name="Frame426"
            placeholder="Showing 1-3 of 3"
            size="lg"
            variant="OutlineGray201"
          ></Input>
        </Column>
        <Row className="absolute bg-gray_900_d8 justify-end lg:pl-[441px] xl:pl-[505px] pl-[568px] 3xl:pl-[681px] w-[100%]">
          <Button
            className="common-pointer bg-white_A700 flex lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] items-center justify-center 3xl:mb-[1098px] lg:mb-[711px] xl:mb-[813px] mb-[915px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] lg:px-[17px] xl:px-[20px] px-[23px] 3xl:px-[27px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]"
            onClick={handleNavigate4}
          >
            <Img
              src="images/img_frame467.png"
              className="flex items-center justify-center"
              onClick={handleNavigate4}
              alt="Frame467"
            />
          </Button>
          <Column className="bg-white_A700 items-center w-[93%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              wrapClassName="flex w-[100%]"
              name="Frame413"
              placeholder="Add Account"
              suffix={
                <Img
                  src="images/img_vector_23.png"
                  className="w-[16.01px] h-[16.01px] ml-[35px] mr-[20px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[15px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[17px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] 3xl:mr-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              size="lg"
              variant="OutlineIndigo50"
            ></Input>
            <Row className="justify-between w-[98%]">
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[37%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="bg-transparent border-0 font-normal p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  wrapClassName="3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[9px] bg-white_A700 border border-gray_201 border-solid flex lg:pl-[13px] lg:pr-[17px] lg:py-[6px] pl-[17px] pr-[22px] py-[8px] rounded-radius4 w-[84%] xl:pl-[15px] xl:pr-[19px] xl:py-[7px]"
                  name="Frame418"
                  placeholder="Search for a field"
                  prefix={
                    <Img
                      src="images/img_vector_24.png"
                      className="cursor-pointer w-[16.71px] h-[16.71px] mr-[11px] lg:w-[12px] lg:h-[13px] lg:mr-[8px] xl:w-[14px] xl:h-[15px] xl:mr-[9px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:mr-[13px] my-[auto]"
                      alt="Vector"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#bac1ce"
                        className="cursor-pointer w-[16.71px] h-[16.71px] ml-[10px] lg:w-[12px] lg:h-[13px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[12px] my-[auto]"
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Row className="bg-teal_50 items-center lg:mb-[595px] xl:mb-[680px] mb-[765px] 3xl:mb-[918px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pr-[126px] xl:pr-[145px] pr-[163px] 3xl:pr-[195px] w-[100%]">
                  <Line className="bg-blue_800 h-[2px] rotate-[90deg] w-[2%]" />
                  <Text className="font-semibold lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Basic Information
                  </Text>
                </Row>
              </Column>
              <Column className="lg:mb-[382px] xl:mb-[437px] mb-[492px] 3xl:mb-[590px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[61%]">
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                  wrapClassName="bg-bluegray_51 w-[100%]"
                  name="Frame453"
                  placeholder="Basic Information"
                ></Input>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  wrapClassName="mt-[4px] w-[100%]"
                  onChange={(e) => {
                    form.handleChange("name", e.target.value);
                  }}
                  value={form?.values?.name}
                  name="InputField"
                  placeholder="Enter name"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Website
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  onChange={(e) => {
                    form.handleChange("website", e.target.value);
                  }}
                  value={form?.values?.website}
                  name="InputField"
                  placeholder="Enter website"
                  suffix={
                    <Img
                      src="images/img_vector_25.png"
                      className="w-[13.33px] h-[13.33px] ml-[35px] mr-[15px] lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[11px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[18px] my-[auto]"
                      alt="Vector"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Phone
                </Text>
                <SelectBox
                  className="bg-transparent font-normal mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]"
                  onChange={(e) => {
                    form.handleChange("phone", e);
                  }}
                  value={form?.values?.phone}
                  placeholderClassName="bg-transparent text-bluegray_300"
                  name="Frame418"
                  placeholder="Enter phone number"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_26.png"
                      className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="utlineGray201"
                ></SelectBox>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Sales Owner
                </Text>
                <SelectBox
                  className="bg-transparent font-normal mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                  placeholderClassName="bg-transparent text-bluegray_701"
                  name="Frame418"
                  placeholder="Jemee Tala"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_27.png"
                      className="w-[13.34px] h-[13.34px] mr-[35px] lg:w-[10px] lg:h-[11px] lg:mr-[27px] xl:w-[11px] xl:h-[12px] xl:mr-[31px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[42px]"
                      alt="Vector"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="utlineGray201"
                ></SelectBox>
              </Column>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
              <Button
                className="common-pointer bg-white_A700 font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[9%]"
                onClick={handleNavigate5}
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer bg-bluegray_900 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[8%]"
                onClick={() => {
                  form.handleSubmit(callApi2);
                }}
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Row>
      </Stack>

      <ToastContainer />
    </>
  );
};

export default AddAccountPage;
