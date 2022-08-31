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

const Products1Page = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[7%]">
            <Column className="">
              <Column className="bg-bluegray_900 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                <Img
                  src="images/img_group345_3.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group345"
                />
                <Img
                  src="images/img_vector_231.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_232.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_233.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] w-[38%]"
                  alt="Vector"
                />
                <Button
                  className="flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  shape="icbRoundedBorder4"
                  size="xlIcn"
                  variant="icbFillBlue50"
                >
                  <Img
                    src="images/img_group331_3.png"
                    className="flex items-center justify-center"
                    alt="Group331"
                  />
                </Button>
                <Button className="bg-transparent lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-center w-[36%]"></Button>
                <Img
                  src="images/img_vector_235.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_236.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_237.png"
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
                    src="images/img_vector_239.png"
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
                  src="images/img_group5_8.png"
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
                  src="images/img_group4_8.png"
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
                  src="images/img_group3_10.png"
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
                  src="images/img_group100_4.png"
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
                  src="images/img_group99_4.png"
                  className="flex items-center justify-center"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
              <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]">
                Products
              </Text>
              <Img
                src="images/img_vector_240.png"
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                All Products (1)
              </Text>
              <SelectBox
                className="bg-bluegray_900 font-normal lg:ml-[327px] xl:ml-[374px] ml-[421px] 3xl:ml-[505px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[9%]"
                placeholderClassName="bg-transparent text-white_A700"
                name="Frame419"
                placeholder="Add product"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_241.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    alt="Vector"
                  />
                }
                shape="oundedBorder4"
                size="sm"
                variant="utlineGray201"
              ></SelectBox>
              <SelectBox
                className="bg-white_A700 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[10%]"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame418"
                placeholder="Add categories"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_242.png"
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
                name="Frame422"
                placeholder="Edit coumns"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_244.png"
                    className="w-[10.4px] h-[6.2px] mr-[14px] lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    alt="Vector"
                  />
                }
                shape="oundedBorder4"
                size="sm"
                variant="utlineGray201"
              ></SelectBox>
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px] rounded-radius4 w-[6%]">
                <Img
                  src="images/img_vector_245.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[0] w-[34%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_vector_246.png"
                  className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[18%]"
                  alt="Vector"
                />
              </Row>
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[9%]">
                <Img
                  src="images/img_vector_247.png"
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
                src="images/img_vector_248.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Active
              </Text>
              <Img
                src="images/img_vector_249.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                Base currency amount
              </Text>
              <Img
                src="images/img_vector_250.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] ml-[99px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                category
              </Text>
              <Text className="font-semibold 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                created at
              </Text>
              <Img
                src="images/img_vector_251.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
                alt="Vector"
              />
              <Text className="font-semibold ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]">
                created by
              </Text>
              <Img
                src="images/img_vector_252.png"
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] w-[1%]"
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
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_31.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_32.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_33.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_34.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_35.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_36.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_37.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="morevertical"
                />
              </Row>
              <Line className="self-center w-[100%] border-indigo_50 border border-solid bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 3xl:p-[19px] p-[16px]" />
              <Row className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] w-[100%]">
                <div className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="bg-amber_100 flex font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]">
                  R
                </Text>
                <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:pr-[117px] xl:pr-[134px] pr-[151px] 3xl:pr-[181px] w-[15%]">
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
                <Text className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  --
                </Text>
                <Text className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Hardware
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  A few seconds ago
                </Text>
                <Text className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                  Jemee Tala
                </Text>
                <Img
                  src="images/img_morevertical_38.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
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

export default Products1Page;
