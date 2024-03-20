import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import axios from "axios";
// import { BsThreeDots } from "react-icons/bs";
import { BASE_URL2 } from "../../../constants/baseUrl";

interface Participant {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  lga: string;
  dob: string;
  programme: string;
}

const Approved: React.FC = () => {
  const [approvedParticipantsInfo, setApprovedParticipantsInfo] = useState<Participant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get(`${BASE_URL2}getAllApprovedParticipants`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setApprovedParticipantsInfo(response.data.data.totalParticipants);
        setLoading(false);
        console.log("AYANFE'S QUERY",response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching approved participants:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "First-Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last-Name",
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
    }
  ];

  const userData = approvedParticipantsInfo?.map((participant, index) => ({
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

export default Approved;
