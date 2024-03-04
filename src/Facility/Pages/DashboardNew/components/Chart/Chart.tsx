import { FC, useState, useEffect, useCallback } from 'react';

import { Pie } from "@ant-design/plots";

import useGetParticipantInfo from '../../../../../hooks/useGetParticipants'; // Assuming correct path



interface Participant {

  clockInStatus: boolean;

}



const Chart: FC = () => {

  const [data, setData] = useState<{ type: string; value: number | undefined }[]>([]);



  const { participantsInfo } = useGetParticipantInfo();



  const getChartData = useCallback(() => {

    if (!participantsInfo) {

      // Handle cases where participantsInfo is initially undefined or null

      return;

    }



    const present = participantsInfo.filter((participant: Participant) => participant.clockInStatus);

    const absent = participantsInfo.filter((participant: Participant) => !participant.clockInStatus);

    const clockOuts = participantsInfo.filter((participant: Participant) => participant.clockInStatus === false);



    setData([

      {

        type: "Total Present Participants",

        value: present.length,

      },

      {

        type: "Total Absent Participants",

        value: absent.length,

      },

      {

        type: "Total Clocked-Out Participants",

        value: clockOuts.length,

      },

    ]);

  }, [participantsInfo]);



  useEffect(() => {

    getChartData();

  }, [getChartData]);



  // Remove unnecessary console.log



  const config = {

    appendPadding: 10,

    data: data,

    angleField: "value",

    colorField: "type",

    radius: 0.8,

    label: {

      type: "inner",

      offset: "-10%",

      content: "{percentage}",

    },

    interactions: [

      {

        type: "element-active",

      },

    ],

    theme: "custom-theme",

  };



  return (

    <div className="my-8 w-[100%] md:m-0 md:w-[40%] overflow-x-scroll">

      Chart

      <Pie {...config} />

    </div>

  );

};



export default Chart;

