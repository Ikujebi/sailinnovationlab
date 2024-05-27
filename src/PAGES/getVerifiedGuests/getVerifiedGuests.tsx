import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl"; // Assuming a different base URL

interface Participant {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  lga: string;
  dob: string;
  programme: string;
}

const Verified: React.FC = () => {
  const [verifiedParticipantsInfo, setVerifiedParticipantsInfo] = useState<Participant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get(`${BASE_URL}getVerifiedParticipants`, { // Adjust the endpoint as per your API
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVerifiedParticipantsInfo(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching verified participants:", error);
        setLoading(false);
      });
  }, []);

  // Function to handle getting all guests associated with a particular verified guest
  const handleGetAllGuests = (guestId: string) => {
    const token = sessionStorage.getItem("token");

    axios
      .get(`${BASE_URL}getAllGuests/${guestId}`, { // Assuming an endpoint to get all guests associated with a verified guest
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle response data, you might set it in state or use it as needed
        console.log("All guests associated with verified guest:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching all guests:", error);
      });
  };

  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "LGA",
      dataIndex: "lga",
      key: "lga",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
    },
    {
      title: "Action",
      key: "action",
      render: ( record: Participant) => (
        <a onClick={() => handleGetAllGuests(record._id)}>Get All Guests</a>
      ),
    },
  ];

  const userData = verifiedParticipantsInfo?.map((participant, index) => ({
    key: participant._id,
    sn: index + 1,
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    lga: participant.lga,
    dob: participant.dob,
    programme: participant.programme
  }));

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={userData} />
      </div>
    </Spin>
  );
};

export default Verified;