interface Meeting {
  id: number
  meetingRoom: {
    buildingId: string
    id: string
    name: string
  }
  customers: {
    id: number
    companyName: string
    customerName: string
  }
  startTime: string
  endTime: string
  qrCodeUrl: string
  bookedAt: string
}

const getMeetings = (buildingId: string): Promise<Meeting[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const meetingsData: Meeting[] = [
        {
          id: 1,
          meetingRoom: {
            buildingId: "stanley",
            id: "MR.0X",
            name: "MR.0X",
          },
          customers: {
            id: 1,
            companyName: "Acme Corp",
            customerName: "Jimmy",
          },
          startTime: "08:30", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          endTime: "10:00", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/1/qrcode",
          bookedAt: "2025-04-16T12:00:00Z",
        },
        {
          id: 2,
          meetingRoom: {
            buildingId: "stanley",
            id: "MR.0Y",
            name: "MR.0Y",
          },
          customers: {
            id: 2,
            companyName: "Beta Corp",
            customerName: "Lara",
          },
          startTime: "12:30", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          endTime: "14:00", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/2/qrcode",
          bookedAt: "2025-04-16T14:20:00Z",
        },

        {
          id: 3,
          meetingRoom: {
            buildingId: "stanley",
            id: "MR.0T",
            name: "MR.0T",
          },
          customers: {
            id: 2,
            companyName: "Tesla Inc.",
            customerName: "Elon",
          },
          startTime: "13:30", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          endTime: "15:00", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/2/qrcode",
          bookedAt: "2025-04-16T14:20:00Z",
        },
        {
          id: 4,
          meetingRoom: {
            buildingId: "chancery house",
            id: "MR.0A",
            name: "MR.0A",
          },
          customers: {
            id: 6,
            companyName: "Apple Inc.",
            customerName: "Steve",
          },
          startTime: "15:30", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          endTime: "16:00", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/2/qrcode",
          bookedAt: "2025-04-16T14:20:00Z",
        },

        {
          id: 5,
          meetingRoom: {
            buildingId: "chancery house",
            id: "MR.0C",
            name: "MR.0C",
          },
          customers: {
            id: 2,
            companyName: "Coca Cola Inc.",
            customerName: "Ben",
          },
          startTime: "15:30", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          endTime: "16:00", // should be fulltimestamp, just using this to show nice on the ui. web version has a function that works with the timestamp
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/2/qrcode",
          bookedAt: "2025-04-16T14:20:00Z",
        },
      ]

      const filteredData = meetingsData.filter(
        (meeting) => meeting.meetingRoom.buildingId === buildingId
      )

      resolve(filteredData)
    }, 1000)
  })
}

export { getMeetings, Meeting }
