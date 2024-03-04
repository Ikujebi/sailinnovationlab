import useGetParticipantInfo from "../../../../../hooks/useGetParticipants";

interface ParticipantInfo {
  clockInStatus: boolean;
  // Add any other properties of ParticipantInfo here
}

export const useChartData = (): { type: string; value: number | undefined }[] => {
  const { participantsInfo } = useGetParticipantInfo();

  const present: ParticipantInfo[] | undefined = participantsInfo?.filter(
    (present) => present.clockInStatus
  );

  const absent: ParticipantInfo[] | undefined = participantsInfo?.filter(
    (absent) => !absent.clockInStatus
  );

  const clockOuts: ParticipantInfo[] | undefined = participantsInfo?.filter(
    (clockOut) => !clockOut.clockInStatus
  );

  return [
    {
      type: "Total Present Participants",
      value: present?.length,
    },
    {
      type: "Total Absent Participants",
      value: absent?.length,
    },
    {
      type: "Total Clocked-Out Participants",
      value: clockOuts?.length,
    },
  ];
};
