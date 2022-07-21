import React from "react";
import ModalProvider from "react-modal";

import { useNavigate } from "react-router-dom";
import { postCreate } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import useForm from "simple-react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Column, Input, Img, Text, SelectBox, Row, Button } from "components";

const AddAccountmodalModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const form = useForm({ name: "", website: "", phone: "" });
  const navigate = useNavigate();

  function callApi(data) {
    const req = { data: { ...data } };
    postCreate(req)
      .then((res) => {
        setapiData(res);

        navigate("/account");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error.!");
      });
  }
  function handleNavigate1() {
    navigate("/account");
  }

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
            wrapClassName="flex w-[56%]"
            name="Group398"
            placeholder="Add Account"
            suffix={
              <Img
                src="images/img_vector_101.png"
                className="w-[16.01px] h-[16.01px] ml-[35px] mr-[20px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[15px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[17px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] 3xl:mr-[24px] my-[auto]"
                alt="Vector"
              />
            }
            size="lg"
            variant="OutlineIndigo50"
          ></Input>
          <Column className="bg-white_A700 lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px] w-[56%]">
            <Input
              className="bg-transparent border-0 font-normal not-italic lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
              wrapClassName="bg-bluegray_51 ml-[4px] w-[99%]"
              name="Frame453"
              placeholder="Basic Information"
            ></Input>
            <Text className="font-normal ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              <span className="text-black_900 font-sourcesanspro">Name </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="ml-[4px] mt-[4px] w-[99%]"
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
            <Text className="font-normal ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Website
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
              wrapClassName="flex ml-[4px] mt-[4px] w-[99%]"
              onChange={(e) => {
                form.handleChange("website", e.target.value);
              }}
              value={form?.values?.website}
              name="InputField"
              placeholder="Enter website"
              suffix={
                <Img
                  src="images/img_vector_102.png"
                  className="w-[13.33px] h-[13.33px] ml-[35px] mr-[15px] lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[11px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[18px] my-[auto]"
                  alt="Vector"
                />
              }
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-normal ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Phone
            </Text>
            <SelectBox
              className="bg-transparent font-normal ml-[4px] mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[99%]"
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
                  src="images/img_vector_103.png"
                  className="w-[8.67px] h-[5.17px] mr-[21px] lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                  alt="Vector"
                />
              }
              shape="oundedBorder4"
              size="sm"
              variant="utlineGray201"
            ></SelectBox>
            <Text className="font-normal ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Sales Owner
            </Text>
            <SelectBox
              className="bg-transparent font-normal ml-[4px] mt-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[99%]"
              placeholderClassName="bg-transparent text-bluegray_701"
              name="Frame418"
              placeholder="Jemee Tala"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_vector_104.png"
                  className="w-[13.34px] h-[13.34px] mr-[35px] lg:w-[10px] lg:h-[11px] lg:mr-[27px] xl:w-[11px] xl:h-[12px] xl:mr-[31px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[42px]"
                  alt="Vector"
                />
              }
              shape="oundedBorder4"
              size="sm"
              variant="utlineGray201"
            ></SelectBox>
          </Column>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[56%]">
            <Button
              className="common-pointer bg-white_A700 font-normal lg:ml-[274px] xl:ml-[314px] ml-[353px] 3xl:ml-[423px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[14%]"
              onClick={handleNavigate1}
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            >
              Cancel
            </Button>
            <Button
              className="common-pointer bg-bluegray_900 font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[12%]"
              onClick={() => {
                form.handleSubmit(callApi);
              }}
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray201"
            >
              Save
            </Button>
          </Row>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default AddAccountmodalModal;
