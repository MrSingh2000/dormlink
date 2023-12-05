import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import man from "../../images/man.png";
import bg from "../../images/curiosity.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
import { updateLoading } from "../../redux/slices/loaderSlice";

const HostelRegistrationForm = () => {
  // let authToken = useSelector((store) => store.authToken.token);
  const loading = useSelector((store) => store.loading.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2OGQ4M2Q2YzQ0ZjU5ODliNWIxMDM1IiwidHlwZSI6InVzZXIifSwiaWF0IjoxNzAxNzk3NDYwfQ.vAlrv7r6Nkmbi6p2ag1oDM4wOu8Nlt0No1DsLFzbk4g";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    fathersName: "",
    mothersName: "",
    gender: "male",
    dob: "",
    bloodGroup: "",
    aadharNumber: "",
    address: "",
    branch: "",
    year: "",
    images: [],
    documents: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileDrop = (e, type) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData({
      ...formData,
      [type]: files,
    });
  };

  const handleSubmit = async (e) => {
    dispatch(updateLoading());
    e.preventDefault();
    try {
      let imageFormData = new FormData();
      imageFormData.append("file", formData.images[0]);

      await axios({
        url: `${process.env.REACT_APP_HOST}/api/docs/image`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          authToken: authToken,
        },
        data: imageFormData,
      })
        .then(async (res) => {
          console.log("response 1: ", res);
          const imageUrl = res.data.url;

          let dataFormData = new FormData();
          dataFormData.append("file", formData.documents[0]);
          dataFormData.append("fullName", formData.fullName);
          dataFormData.append("email", formData.email);
          dataFormData.append("rollNum", formData.rollNumber);
          dataFormData.append("fatherName", formData.fathersName);
          dataFormData.append("motherName", formData.mothersName);
          dataFormData.append("gender", formData.gender);
          dataFormData.append("dob", formData.dob);
          dataFormData.append("bloodGroup", formData.bloodGroup);
          dataFormData.append("adhaarNum", formData.aadharNumber);
          dataFormData.append("address", formData.address);
          dataFormData.append("branch", formData.branch);
          dataFormData.append("year", formData.year);
          dataFormData.append("imageUrl", imageUrl);

          await axios({
            url: `${process.env.REACT_APP_HOST}/api/docs/save`,
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
              authToken: authToken,
            },
            data: dataFormData,
          }).then((response) => {
            console.log("response 2: ", response);
            dispatch(updateLoading());
            navigate('/');
          });
        })
        .catch((error) => {
          console.log("error: ", error);
          dispatch(updateLoading());
        });
    } catch (error) {
      console.error("Error:", error);
      dispatch(updateLoading());
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="bg-white p-4"
    >
      <div className="max-w-4xl mx-auto  p-6  text-white shadow-md rounded-xl bg-[#31525ba7]">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Hostel Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col">
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="rollNumber"
                >
                  Roll Number
                </label>
                <input
                  type="number"
                  id="rollNumber"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-center  w-1/2">
              {formData.images.length > 0 ? (
                <div className="mt-4">
                  <img
                    src={URL.createObjectURL(formData.images[0])}
                    alt="Student"
                    style={{ height: "30vh" }}
                    className="upload-preview mt-2 bg-white border-l-cyan-800 rounded-3xl"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={man}
                    alt="student"
                    style={{ height: "30vh" }}
                    className="bg-white border-l-cyan-800 rounded-3xl"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row w-full justify-between">
            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="fathersName"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="fathersName"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>

            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="mothersName"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="mothersName"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>
          </div>

          <div className="flex flex-row w-full justify-between">
            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4 w-[47.5%]">
              <label className="block text-sm font-semibold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>
          </div>

          <div className="flex flex-row w-full justify-between">
            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="bloodGroup"
              >
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>

            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="aadharNumber"
              >
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
              required
            ></textarea>
          </div>

          <div className="flex flex-row w-full justify-between">
            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="branch"
              >
                Branch
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>

            <div className="mb-4 w-[47.5%]">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="year"
              >
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101] bg-white text-[#31525b]"
                required
              />
            </div>
          </div>

          <div className="flex flex-row w-full justify-between ">
            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="images"
              >
                Images (Drag and drop or click to upload)
              </label>
              <div
                className="border-dashed border-2 border-gray-300 h-20 p-4 rounded-md"
                onDrop={(e) => handleFileDrop(e, "images")}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setFormData({ ...formData, images: e.target.files })
                  }
                />
                <p className="text-white h-20">
                  Drag and drop some files here, or click to select files
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="documents"
              >
                Documents (Drag and drop or click to upload)
              </label>
              <div
                className="border-dashed border-2 border-gray-300 p-4 h-20 rounded-md"
                onDrop={(e) => handleFileDrop(e, "documents")}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    setFormData({ ...formData, documents: e.target.files })
                  }
                />
                <p className="text-white">
                  Drag and drop some files here, or click to select files
                </p>
              </div>
              {formData.documents.length > 0 && (
                <div className="mt-4">
                  <h4>Uploaded Documents:</h4>
                  {formData.documents.map((file, index) => (
                    <div key={index}>
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ffa101] text-white py-2 rounded-md hover:bg-ffa101 focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HostelRegistrationForm;
