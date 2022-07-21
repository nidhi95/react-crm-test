import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  SelectBox,
  Input,
  Text,
  Stack,
  Line,
  List,
  RadioGroup,
  Radio,
} from "components";

const TasksPage = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="items-center w-[7%]">
            <Column className="">
              <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_group371.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group371"
                />
                <Button
                  className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder4"
                  size="2xlIcn"
                  variant="icbFillBlue50"
                >
                  <Img
                    src="images/img_group177_1.png"
                    className="h-[16px] flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Group177"
                  />
                </Button>
                <Img
                  src="images/img_vector_280.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_281.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_282.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[32%]"
                  alt="Vector"
                />
                <Button className="bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"></Button>
                <Img
                  src="images/img_vector_284.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_285.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_286.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[371px] xl:mb-[425px] mb-[478px] 3xl:mb-[573px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[38%]"
                  alt="Vector"
                />
              </Column>
            </Column>
          </aside>
          <Column className="items-center lg:mb-[46px] xl:mb-[53px] mb-[60px] 3xl:mb-[72px] w-[93%]">
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
                    src="images/img_vector_288.png"
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
                  src="images/img_group5_10.png"
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
                  src="images/img_group4_10.png"
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
                  src="images/img_group3_12.png"
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
                  src="images/img_group100_6.png"
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
                  src="images/img_group99_6.png"
                  className="flex items-center justify-center"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row className="bg-gray_100 items-center lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_701 w-[auto]">
                My meetings and Tasks
              </Text>
              <Button
                className="bg-white_A700 font-normal 3xl:ml-[1129px] lg:ml-[731px] xl:ml-[837px] ml-[941px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[7%]"
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Add meeting
              </Button>
              <Button
                className="bg-bluegray_900 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]"
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                Add Task
              </Button>
            </Row>
            <Stack className="3xl:h-[1005px] lg:h-[651px] xl:h-[745px] h-[837px] 2xl:h-[838px] w-[100%]">
              <Column className="absolute h-[max-content] inset-y-[0] items-center left-[0] my-[auto] w-[66%]">
                <Stack className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]">
                  <Column className="absolute border border-gray_201 border-solid justify-end lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] w-[100%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      MEETINGS
                    </Text>
                  </Column>
                  <Column className="absolute bottom-[0] items-center left-[15%] w-[7%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      TASKS
                    </Text>
                    <Line className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[100%]" />
                  </Column>
                </Stack>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[22%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-red_700 w-[auto]">
                        Sample Task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        This is just a sample task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        <span className="text-bluegray_600 font-sourcesanspro">
                          Due date:{" "}
                        </span>
                        <span className="text-red_700 font-sourcesanspro">
                          20 days ago (overdue)
                        </span>
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                  <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Sample Task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        This is just a sample task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        Due date: in 2 months
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                  <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Sample Task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        This is just a sample task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        Due date: in 2 months
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                  <Row className="bg-white_A700 border border-gray_201 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Sample Task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        This is just a sample task
                      </Text>
                      <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        Due date: in 2 months
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Row className="bg-gray_101 border border-gray_201 border-solid items-center justify-between lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                  <Column className="lg:pr-[431px] xl:pr-[493px] pr-[555px] 3xl:pr-[666px] w-[82%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Sample Task
                    </Text>
                    <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      This is just a sample task
                    </Text>
                    <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      Due date: in 2 months
                    </Text>
                  </Column>
                  <Img
                    src="images/img_vector_289.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Button className="bg-transparent mr-[3px] text-center w-[2%]"></Button>
                </Row>
                <Row className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <div className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                  <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Sample Task
                    </Text>
                    <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      This is just a sample task
                    </Text>
                    <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      Due date: in 2 months
                    </Text>
                  </Column>
                </Row>
                <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <Text className="font-normal my-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                    <span className="text-bluegray_701 font-sourcesanspro">
                      Showing task due from{" "}
                    </span>
                    <span className="text-bluegray_701 font-sourcesanspro font-semibold">
                      18 may 2022 - 22 May 2023
                    </span>
                  </Text>
                </Column>
              </Column>
              <Column className="absolute bg-white_A700 border border-gray_201 border-solid lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] right-[0] top-[0] w-[34%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  OPEN TASKS
                </Text>
                <RadioGroup
                  className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[20%]"
                  name="Group131"
                >
                  <Radio
                    value={false}
                    className="font-normal mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group131"
                    label="Overdue"
                    shape="oundedBorder10"
                    variant="utlineBluegray201"
                  ></Radio>
                  <Radio
                    value={false}
                    className="font-normal lg:mr-[19px] xl:mr-[22px] mr-[25px] 3xl:mr-[30px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group131"
                    label="Today"
                    shape="oundedBorder10"
                    variant="utlineBluegray201"
                  ></Radio>
                  <Radio
                    value={false}
                    className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group131"
                    label="Tomorrow"
                    shape="oundedBorder10"
                    variant="utlineBluegray201"
                  ></Radio>
                </RadioGroup>
                <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  ALL TASKS
                </Text>
                <RadioGroup
                  selectedValue="Open"
                  className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[21%]"
                  name="Group132"
                >
                  <Radio
                    value={true}
                    className="font-normal lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901"
                    inputClassName="bg-blue_800 h-[20px] mr-[5px] rounded-radius50 w-[20px]"
                    name="Group132"
                    label="Open"
                  ></Radio>
                  <Radio
                    value={false}
                    className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group132"
                    label="Completed"
                    shape="oundedBorder10"
                    variant="utlineBluegray201"
                  ></Radio>
                </RadioGroup>
              </Column>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TasksPage;
