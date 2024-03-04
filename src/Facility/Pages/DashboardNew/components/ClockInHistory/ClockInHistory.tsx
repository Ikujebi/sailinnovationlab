import { Table, Tag, Spin } from "antd";
import useGetParticipantInfo from "../../../../../hooks/useGetParticipants";

const ClockInHistory = () => {
  const { participantsInfo, loading } = useGetParticipantInfo();

  const filteredParticipants = participantsInfo?.filter(
    (participant) => participant.approvalStatus === "APPROVED"
  );

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
      title: "ClockInDate",
      dataIndex: "clockInDate",
      key: "clockInDate",
    },
    {
      title: "Clock-In Time",
      dataIndex: "clockInTime",
      key: "clockInTime",
    },
    {
      title: "Clock-Out Time",
      dataIndex: "clockOutTime",
      key: "clockOutTime",
    },
    {
      title: "Clock-In Status",
      key: "clockInStatus",
      dataIndex: "clockInStatus",
      render: (clockInStatus: boolean) => {
        let color = "";
        clockInStatus ? (color = "geekblue") : (color = "volcano");
        const statusText = clockInStatus ? "Present" : "Absent";
        return (
          <Tag color={color} key={statusText}>
            {statusText.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  const data = filteredParticipants?.map((participant, index) => ({
    key: index + 1,
    sn: index + 1,
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    clockInDate: participant.clockInDate
      ? new Date(participant.clockInDate).toDateString().substring(0, 10)
      : "Invalid",
    clockInTime: participant.clockInDate
      ? new Date(participant.clockInDate).toTimeString().substring(0, 8)
      : "Invalid",
    clockOutTime: participant.clockOutDate
      ? new Date(participant.clockOutDate).toTimeString().substring(0, 8)
      : "Invalid",
    clockInStatus: participant.clockInStatus,
  }));

  return (
    <Spin spinning={loading}>
      <div className="overflow-scroll w-full">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default ClockInHistory;
