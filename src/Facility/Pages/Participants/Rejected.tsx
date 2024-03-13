import { FC, useState, useEffect } from "react";
import { Table, Spin } from "antd";
import axios from "axios";
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

const ParticipantsSelection: FC = () => {
  const [ParticipantsInfo, setParticipantsInfo] = useState<Participant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(`${BASE_URL2}getAllUsers`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setParticipantsInfo(response.data.data.totalParticipants);
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching approved participants:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const apiUrl = `${BASE_URL2}approvePendingParticipants`;
  const newToken = sessionStorage.getItem("token");

  const handleApproveStudents = async (studentId: string) => {
    try {
      const responseStudents = await axios.put(
        `${apiUrl}/${studentId}`,
        {
          approvalStatus: "APPROVED",
          startDate: "2023-08-01",
          endDate: "2024-02-01",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
        }
      );

      window.alert(responseStudents.data.responseMessage);

      console.log(`Student with ID ${studentId} has been approved.`);
      if (responseStudents.status === 200) {
        console.log(`Student with ID ${studentId} has been approved.`);
      } else {
        console.error(`Failed to approve student with ID ${studentId}.`);
      }
    } catch (error) {
      console.error("Error approving student:", error);
    }
  };

  const handleDisapproveStudents = async (studentId: string) => {
    try {
      const responseStudents = await axios.put(
        `${apiUrl}/${studentId}`,
        {
          approvalStatus: "DISAPPROVED",
          startDate: "2023-08-01",
          endDate: "2024-02-01",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
        }
      );

      window.alert(responseStudents.data.responseMessage);

      console.log(`Student with ID ${studentId} has been disapproved.`);
      if (responseStudents.status === 200) {
        console.log(`Student with ID ${studentId} has been disapproved.`);
      } else {
        console.error(`Failed to disapprove student with ID ${studentId}.`);
      }
    } catch (error) {
      console.error("Error disapproving student:", error);
    }
  };

  const columns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "First-Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last-Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "LGA", dataIndex: "lga", key: "lga" },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    { title: "Programme", dataIndex: "programme", key: "programme" },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: { key: string }) => (
        <div className=" gap-4 flex">
          <button
            className="bg-blue-700 h-[1.5rem] w-[5rem] text-white font-semibold rounded-md"
            onClick={() => handleApproveStudents(record.key)}
          >
            Approve
          </button>
          <button
            className="bg-red-700 h-[1.5rem] w-[5rem] text-white font-semibold rounded-md"
            onClick={() => handleDisapproveStudents(record.key)}
          >
            Disapprove
          </button>
        </div>
      ),
    },
  ];

  const userData = ParticipantsInfo?.map((participant, index) => ({
    key: participant._id,
    sn: index + 1,
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    lga: participant.lga,
    dob: participant.dob,
    programme: participant.programme,
  }));

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto ">
        <Table columns={columns} dataSource={userData} />
      </div>
    </Spin>
  );
};

export default ParticipantsSelection;
