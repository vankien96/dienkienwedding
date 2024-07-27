
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2a$12$BChiWT9RGVwRa2JHdjvFUuLAr6gLxEinghR5R534Mi4vO./JcfoJi", //123qwe
    password_confirm: "$2a$12$BChiWT9RGVwRa2JHdjvFUuLAr6gLxEinghR5R534Mi4vO./JcfoJi",
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
        text: "Khu Tái định cư thôn Phước Lộc - xã Lộc Tiến - huyện Phú Lộc - Thừa Thiên Huế",
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
        provider_name: "TPBank",
        provider_number: "01853641501",
        holder_name: "TRUONG VAN KIEN"
      }, {
        provider_name: "Vietcombank",
        provider_number: "0041000334663",
        holder_name: "TRUONG VAN KIEN"
      }, {
        provider_name: "Momo",
        provider_number: "0946876983",
        holder_name: "TRUONG VAN KIEN"
      }],
      email: "vankien96@gmail.com",
      phone: "0946876983",
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
        text: "Hội trường thôn 6 - xã Triệu Lăng - huyện Triệu Phong - tỉnh Quảng Trị",
        map: "https://goo.gl/maps/tRjKuVRNisqxhQaT7"
      },
      time_start: {
        date: {
          lunar: {
            day: "19",
            month: "08",
            year: "2024"
          },
          day_of_week: "Thứ 7",
          solar: {
            day: "21",
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
        provider_name: "Vietinbank",
        provider_number: "105877216713",
        holder_name: "VO THI DIEN"
      }],
      email: "dienevent@gmail.com",
      phone: "0973599364",
      bg: '/assets/images/bg.jpg',
      bg_mobile: '/assets/images/bg_mobile.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
