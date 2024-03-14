import { FC } from "react";
import { Table, Spin } from "antd";
import useFetchRejectedParticipants from "../../../hooks/useFetchDisapprovedParticipants";


const ParticipantsSelection: FC = () => {
  const {rejectedParticipantsInfo:rejectedParticipantsInfo, loading: rejectedParticipantsInfoLoading} = useFetchRejectedParticipants();
console.log("rejectedParticipantsInfo!!!",rejectedParticipantsInfo);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Programme", dataIndex: "programme", key: "programme" },
  ];

  const userData = rejectedParticipantsInfo.map((participant) => ({
    key: participant.id,
    id: participant.id,
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    programme: participant.programme,
  }));

  return (
    <Spin spinning={rejectedParticipantsInfoLoading}>
      <div className="overflow-x-auto ">
        <Table columns={columns} dataSource={userData} />
      </div>
    </Spin>
  );
};

export default ParticipantsSelection;
