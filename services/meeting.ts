const getMeetings = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
          startTime: "2025-04-17T08:30:00Z",
          endTime: "2025-04-17T10:30:00Z",
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
          startTime: "2025-04-17T11:00:00Z",
          endTime: "2025-04-17T12:30:00Z",
          qrCodeUrl:
            "https://my-app.com/availability-force/v1/meetings/2/qrcode",
          bookedAt: "2025-04-16T14:20:00Z",
        },
      ])
    }, 1000)
  })
}
