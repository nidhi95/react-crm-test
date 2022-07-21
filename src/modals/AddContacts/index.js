import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Img, Text, Row, Button } from "components";

const AddContactsModal = (props) => {
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
            wrapClassName="flex w-[60%]"
            name="Group398"
            placeholder="Add Contact"
            suffix={
              <Img
                src="images/img_vector_202.png"
                className="w-[16.01px] h-[16.01px] ml-[35px] mr-[20px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[15px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[17px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] 3xl:mr-[24px] my-[auto]"
                alt="Vector"
              />
            }
            size="lg"
            variant="OutlineIndigo50"
          ></Input>
          <Column className="bg-white_A700 justify-end lg:p-[21px] xl:p-[24px] p-[28px] 3xl:p-[33px] w-[60%]">
            <Text className="font-normal ml-[2px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              <span className="text-black_900 font-sourcesanspro">
                First Name{" "}
              </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="ml-[2px] mt-[4px] w-[99%]"
              name="InputField"
              placeholder="Enter First Name"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-normal ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              <span className="text-black_900 font-sourcesanspro">
                Last Name{" "}
              </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="ml-[2px] mt-[4px] w-[99%]"
              name="InputField"
              placeholder="Enter Last Name"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-normal ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Mobile Number
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="ml-[2px] mt-[4px] w-[99%]"
              name="Frame418"
              placeholder="Enter mobile number"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            ></Input>
            <Text className="font-normal ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Email
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="ml-[2px] mt-[4px] w-[99%]"
              name="Frame418"
              placeholder="Enter mail addres"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            ></Input>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[60%]">
            <Button
              className="bg-white_A700 font-normal lg:ml-[274px] xl:ml-[314px] ml-[353px] 3xl:ml-[423px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[14%]"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            >
              Cancel
            </Button>
            <Button
              className="bg-bluegray_900 font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[12%]"
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

export default AddContactsModal;
