
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Trương Văn Kiên",
      parent: {
        father: "",
        mother: "Nguyễn Thị Chanh"
      },
      location: {
        text: "Phước Lộc - Lộc Tiến - Phú Lộc - Thừa Thiên Huế",
        map: "https://maps.app.goo.gl/61aHtiQpCS3Y5uQL8"
      },
      time_start: {
        date: {
          lunar: {
            day: "20",
            month: "8",
            year: "2024"
          },
          day_of_week: "Chủ nhật",
          solar: {
            day: "22",
            month: "09",
            year: "2024"
          }
        },
        time: {
          hour: "11",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "MB Bank",
        provider_number: "9971997555555",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Techcombank",
        provider_number: "19034892842011",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Momo",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }],
      email: "male@gmail.com",
      phone: "0973699999",
      bg: '/assets/images/bg.jpg',
      bg_mobile: '/assets/images/bg_mobile.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Võ Thị Diện",
      parent: {
        father: "Võ Ninh Hướng",
        mother: ""
      },
      location: {
        text: "Thôn 6 - Triệu Lăng - Triệu Phong - Quảng Trị",
        map: "https://goo.gl/maps/tRjKuVRNisqxhQaT7"
      },
      time_start: {
        date: {
          lunar: {
            day: "17",
            month: "12",
            year: "2020"
          },
          day_of_week: "Thứ 7",
          solar: {
            day: "17",
            month: "12",
            year: "2020"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Momo",
        provider_number: "09736",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }],
      email: "female@gmail.com",
      phone: "0985123123",
      bg: '/assets/images/bg.jpg',
      bg_mobile: '/assets/images/bg_mobile.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
