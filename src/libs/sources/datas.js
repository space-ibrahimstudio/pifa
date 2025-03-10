export const getContactInfo = () => {
  const contacts = [
    { id: "1", label: "(+62) 811 5737 688", value: "(+62) 811 5737 688", icon: "/svg/phone.svg" },
    { id: "2", label: "nettacodeindonesia@gmail.com", value: "nettacodeindonesia@gmail.com", icon: "/svg/email.svg" },
  ];

  return contacts;
};

export const getSocialInfo = () => {
  const socials = [
    { id: "1", label: "PIFA on Instagram", value: "https://instagram.com/pifa.co.id", icon: "/svg/instagram.svg" },
    { id: "2", label: "PIFA on Facebook", value: "https://www.facebook.com/Pifa-175960317881224", icon: "/svg/facebook.svg" },
    { id: "3", label: "PIFA on YouTube", value: "https://www.youtube.com/channel/UChd3pp48NwGI0afTn3dgm7g", icon: "/svg/youtube.svg" },
  ];

  return socials;
};

export const getStaticPages = () => {
  const pages = [
    {
      id: "1",
      title: "Navigasi",
      items: [
        { itemid: "1", name: "Syarat & Ketentuan", path: "/informasi/syarat-ketentuan" },
        { itemid: "2", name: "Tentang PIFA", path: "/informasi/tentang-pifa" },
        { itemid: "3", name: "Kebijakan Privasi", path: "/informasi/kebijakan-privasi" },
        { itemid: "4", name: "Bantuan (FAQ)", path: "/informasi/faq" },
      ],
    },
    {
      id: "2",
      title: "Panduan",
      items: [
        { itemid: "1", name: "Kode Etik Jurnalistik", path: "/informasi/kode-etik-jurnalistik" },
        { itemid: "2", name: "Beriklan", path: "/informasi/pasang-iklan" },
        { itemid: "3", name: "Pedoman Media Siber", path: "/informasi/pedoman-media-siber" },
      ],
    },
  ];

  return pages;
};
