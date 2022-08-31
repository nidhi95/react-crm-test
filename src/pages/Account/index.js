import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  SelectBox,
  Input,
  Text,
  List,
  Line,
} from "components";

const AccountPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[7%]">
            <Column className="">
              <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_group345_2.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group345"
                />
                <Img
                  src="images/img_vector_209.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_210.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  alt="Vector"
                />
                <Button
                  className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder4"
                  size="xlIcn"
                  variant="icbFillBlue50"
                >
                  <Img
                    src="images/img_group331_2.png"
                    className="flex items-center justify-center"
                    alt="Group331"
                  />
                </Button>
                <Img
                  src="images/img_vector_211.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[32%]"
                  alt="Vector"
                />
                <Button className="bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"></Button>
                <Img
                  src="images/img_vector_213.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_214.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_215.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[371px] xl:mb-[425px] mb-[478px] 3xl:mb-[573px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                  alt="Vector"
                />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[93%]">
            <Row className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
              <SelectBox
                className="bg-transparent font-semibold p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
                placeholderClassName="bg-transparent text-bluegray_700"
                name="Group93"
                placeholder="Contacts"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_217.png"
                    className="w-[10.54px] h-[6.25px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
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
                className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                size="lgIcn"
                variant="icbFillBluegray900"
              >
                <Img
                  src="images/img_group5_7.png"
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
                  src="images/img_group4_7.png"
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
                  src="images/img_group3_9.png"
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
                  src="images/img_group100_3.png"
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
                  src="images/img_group99_3.png"
                  className="flex items-center justify-center"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
              <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                Accounts
              </Text>
              <Img
                src="images/img_vector_218.png"
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                My Accounts (03)
              </Text>
              <Button
                className="3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] ml-[16px] mt-[1px] text-center w-[10%] xl:ml-[14px]"
                leftIcon={
                  <Img
                    src="images/img_vector_219.png"
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
              <Button
                className="3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] ml-[16px] text-center w-[6%] xl:ml-[14px]"
                leftIcon={
                  <Img
                    src="images/img_vector_220.png"
                    className="w-[20.01px] mr-[11px] text-center lg:w-[15px] lg:mr-[8px] xl:w-[17px] xl:mr-[9px] 2xl:w-[20px] 3xl:w-[24px] 3xl:mr-[13px]"
                    alt="Vector"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineBlue800"
              >
                <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                  All
                </div>
              </Button>
              <SelectBox
                className="bg-bluegray_900 font-normal lg:ml-[300px] xl:ml-[343px] ml-[386px] 3xl:ml-[463px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[9%]"
                placeholderClassName="bg-transparent text-white_A700"
                name="Frame419"
                placeholder="Add account"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_221.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
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
                    src="images/img_vector_223.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    alt="Vector"
                  />
                }
                shape="oundedBorder4"
                size="sm"
                variant="utlineGray201"
              ></SelectBox>
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[9%]">
                <Img
                  src="images/img_vector_224.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] my-[0] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Filters
                </Text>
                <Text className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] px-[4px] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  01
                </Text>
              </Row>
            </Row>
            <Row className="bg-gray_100 border border-gray_201 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
              <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
              <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Name
              </Text>
              <Img
                src="images/img_vector_225.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Open deals amou...
              </Text>
              <Img
                src="images/img_vector_226.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                last contacted ti...
              </Text>
              <Img
                src="images/img_vector_227.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Related contacts
              </Text>
              <Text className="font-semibold lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                sales owner
              </Text>
              <Img
                src="images/img_vector_228.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Webdite
              </Text>
              <Img
                src="images/img_vector_229.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] ml-[92px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Work
              </Text>
              <Img
                src="images/img_vector_230.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1%]"
                alt="Vector"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_23.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_24.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_25.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_26.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_27.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_28.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_29.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[118px] xl:pr-[135px] pr-[152px] 3xl:pr-[182px] w-[15%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                    Riya D
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    Lead
                  </Text>
                </Column>
                <Text className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  $200
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[106px] xl:ml-[121px] ml-[137px] 3xl:ml-[164px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  13 days ago
                </Text>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  J
                </Text>
                <Text className="font-normal font-sourcesanspro xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  www.dhiwise.com
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                  1234567866
                </Text>
                <Img
                  src="images/img_morevertical_30.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
            </List>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              wrapClassName="bg-white_A700 w-[100%]"
              name="Group413"
              placeholder="Showing 1-3 of 3"
              size="lg"
              variant="OutlineGray201"
            ></Input>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AccountPage;
