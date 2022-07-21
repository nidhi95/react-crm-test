import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Input,
  Img,
  CheckBox,
  Text,
  Row,
  SelectBox,
  Button,
} from "components";

const AddTask1Modal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Input
            className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
            wrapClassName="flex w-[49%]"
            name="Group368"
            placeholder="Add task"
            suffix={
              <Img
                src="images/img_vector_203.png"
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] lg:mx-[27px] xl:w-[14px] xl:h-[15px] xl:mx-[31px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mx-[42px] my-[auto] mx-[35px]"
                alt="Vector"
              />
            }
            size="lg"
            variant="OutlineIndigo50"
          ></Input>
          <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[49%]">
            <Column className="bg-bluegray_51 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
              <CheckBox
                className="font-normal not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_901"
                inputClassName="bg-white_A700 border-bluegray_201 border-bw083 border-solid h-[20px] mr-[5px] rounded-radius25 w-[20px]"
                name="Markascomplet"
                label="Mark as completed"
              ></CheckBox>
            </Column>
            <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              <span className="text-black_900 font-sourcesanspro">Title </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="flex mt-[4px] w-[100%]"
              name="Group271"
              placeholder="Enter title of task"
              suffix={
                <Img
                  src="images/img_vector_204.png"
                  className="w-[13.33px] h-[13.33px] ml-[35px] mr-[15px] lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[11px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[18px] my-[auto]"
                  alt="Vector"
                />
              }
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Description
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid mt-[4px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius4 w-[100%]">
              <Text className="font-normal 3xl:mb-[108px] lg:mb-[70px] xl:mb-[80px] mb-[90px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_201 w-[auto]">
                Start typing the details about the task
              </Text>
            </Column>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Column className="lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] w-[35%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Task Type
                </Text>
                <SelectBox
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]"
                  placeholderClassName="bg-transparent text-bluegray_300"
                  name="Group280"
                  placeholder="Select type"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector_205.png"
                      className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
              </Column>
              <Column className="w-[65%]">
                <Text className="font-normal ml-[0] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    Due date
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Row className="items-center justify-between mt-[4px] w-[100%]">
                  <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius4 w-[46%]">
                    <Text className="font-normal mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      06/28/2022
                    </Text>
                    <Img
                      src="images/img_vector_206.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Row>
                  <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius4 w-[46%]">
                    <Text className="font-normal mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                      09:40
                    </Text>
                    <Img
                      src="images/img_vector_207.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Row>
                </Row>
              </Column>
            </Row>
            <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Task Type
            </Text>
            <SelectBox
              className="bg-white_A700 border border-bluegray_100 border-solid font-normal lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] mt-[4px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]"
              placeholderClassName="bg-transparent text-bluegray_300"
              name="Group299"
              placeholder="Select an outcome"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_vector_208.png"
                  className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                  alt="Vector"
                />
              }
            ></SelectBox>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid justify-center lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] w-[49%]">
            <Button
              className="bg-white_A700 font-normal mb-[4px] lg:ml-[275px] xl:ml-[314px] ml-[354px] 3xl:ml-[425px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[14%]"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            >
              Cancel
            </Button>
            <Button
              className="bg-bluegray_900 font-normal mb-[4px] 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[12%]"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            >
              Save
            </Button>
          </Row>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddTask1Modal;
