import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  SelectBox,
  Input,
  Text,
  Line,
} from "components";

const AddnotesPage = () => {
  return (
    <>
      <Column className="bg-bluegray_100 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[7%]">
            <Column className="">
              <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_group345_4.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group345"
                />
                <Img
                  src="images/img_vector_253.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  alt="Vector"
                />
                <Button
                  className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder4"
                  size="xlIcn"
                  variant="icbFillBlue50"
                >
                  <Img
                    src="images/img_group331_4.png"
                    className="flex items-center justify-center"
                    alt="Group331"
                  />
                </Button>
                <Img
                  src="images/img_vector_254.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[38%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_255.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[32%]"
                  alt="Vector"
                />
                <Button className="bg-transparent lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] text-center w-[36%]"></Button>
                <Img
                  src="images/img_vector_257.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_258.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_259.png"
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
                    src="images/img_vector_261.png"
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
                  src="images/img_group5_9.png"
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
                  src="images/img_group4_9.png"
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
                  src="images/img_group3_11.png"
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
                  src="images/img_group100_5.png"
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
                  src="images/img_group99_5.png"
                  className="flex items-center justify-center"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
              <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                Contacts
              </Text>
              <Img
                src="images/img_vector_262.png"
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                Jane Sampleton
              </Text>
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-center lg:ml-[248px] xl:ml-[283px] ml-[319px] 3xl:ml-[383px] mt-[1px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[6%]">
                <Img
                  src="images/img_vector_263.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] ml-[1px] w-[29%]"
                  alt="Vector"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Email
                </Text>
              </Row>
              <SelectBox
                className="bg-transparent font-normal p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame426"
                placeholder="Call"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_265.png"
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
                name="Frame425"
                placeholder="SMS"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_267.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    alt="Vector"
                  />
                }
                shape="oundedBorder4"
                size="sm"
                variant="utlineGray201"
              ></SelectBox>
              <Button
                className="3xl:ml-[12px] bg-white_A700 flex items-center justify-center lg:ml-[7px] ml-[10px] text-center w-[6%] xl:ml-[8px]"
                leftIcon={
                  <Img
                    src="images/img_addtask_1_3.png"
                    className="w-[24px] h-[24px] mr-[10px] text-center lg:w-[18px] lg:h-[19px] lg:mr-[7px] xl:w-[21px] xl:h-[22px] xl:mr-[8px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[12px]"
                    alt="add-task 1"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineGray201"
              >
                <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                  Task
                </div>
              </Button>
              <SelectBox
                className="bg-transparent font-normal p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame424"
                placeholder="Meeting"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_269.png"
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
                name="Frame421"
                placeholder="Add deal"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_271.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    alt="Vector"
                  />
                }
                shape="oundedBorder4"
                size="sm"
                variant="utlineGray201"
              ></SelectBox>
              <Button className="bg-white_A700 border border-gray_201 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                <Img
                  src="images/img_frame420.png"
                  className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="Frame420"
                />
              </Button>
            </Row>
            <Column className="bg-bluegray_51 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 w-[99%]">
              <Row className="pr-[2px] w-[54%]">
                <Img
                  src="images/img_ellipse10_1.png"
                  className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 w-[auto]"
                  alt="Ellipse10"
                />
                <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[29%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901 w-[auto]">
                      Jane Sampleton
                    </Text>
                    <Button className="bg-blue_A401 flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center px-[4px] rounded-radius50 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]">
                      <Img
                        src="images/img_group79.png"
                        className="flex items-center justify-center"
                        alt="Group79"
                      />
                    </Button>
                    <Button className="bg-light_blue_800 flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center px-[4px] rounded-radius50 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]">
                      <Img
                        src="images/img_group80.png"
                        className="flex items-center justify-center"
                        alt="Group80"
                      />
                    </Button>
                    <Button className="bg-blue_500 flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center px-[4px] rounded-radius50 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]">
                      <Img
                        src="images/img_group81_1.png"
                        className="flex items-center justify-center"
                        alt="Group81"
                      />
                    </Button>
                  </Row>
                  <Row className="items-center ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[88%]">
                    <Img
                      src="images/img_vector_272.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[8%]"
                      alt="Vector"
                    />
                    <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_800 w-[auto]">
                      Galveston, Texas, US
                    </Text>
                    <Button className="bg-white_A700 border border-gray_201 border-solid flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] rounded-radius4 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]">
                      <Img
                        src="images/img_group437.png"
                        className="flex items-center justify-center"
                        alt="Group437"
                      />
                    </Button>
                  </Row>
                </Column>
                <Line className="bg-bluegray_100 h-[2px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rotate-[90deg] w-[2px]" />
                <Column className="lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[7%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Score
                  </Text>
                  <Text className="flex font-bold lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] items-center mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                    82
                  </Text>
                </Column>
                <Column className="lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] pr-[1px] py-[1px] w-[18%]">
                  <Row className="items-center w-[89%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Customer fit
                    </Text>
                    <Img
                      src="images/img_vector_273.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="Vector"
                    />
                  </Row>
                  <Row className="items-center mb-[1px] ml-[1px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[90%]">
                    <Img
                      src="images/img_vector_274.png"
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_275.png"
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[14%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_276.png"
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[14%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_277.png"
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[14%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_278.png"
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[14%]"
                      alt="Vector"
                    />
                  </Row>
                </Column>
                <Text className="font-semibold lg:mb-[36px] xl:mb-[41px] mb-[47px] 3xl:mb-[56px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                  Show scoring factors
                </Text>
                <Img
                  src="images/img_vector_279.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] mt-[2px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
              </Row>
              <Row className="lg:mb-[205px] xl:mb-[234px] mb-[264px] 3xl:mb-[316px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[42%]">
                <Column className="lg:pr-[35px] xl:pr-[40px] pr-[46px] 3xl:pr-[55px] w-[42%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Job title
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Educational Specialist
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Accounts
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Not available
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Emails
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    janesampleton@mail.com
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Work
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    +123456786777
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Sales owner
                  </Text>
                  <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Jemee Tala
                  </Text>
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                    Tags
                  </Text>
                  <Text className="bg-bluegray_600 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic p-[4px] rounded-radius4 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Contact
                  </Text>
                </Column>
                <Column className="bg-white_A700 items-center lg:mb-[199px] xl:mb-[227px] mb-[256px] 3xl:mb-[307px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius8 w-[58%]">
                  <Column className="border border-bluegray_51 border-solid xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius6 w-[90%]">
                    <Text className="font-normal lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                      Type your notes here...
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_51 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
                    View All notes
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddnotesPage;
