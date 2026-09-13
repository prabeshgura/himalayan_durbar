export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kamal-adhikari",
    name: "Kamal Adhikari",
    role: "Chairperson",
    image: "/Kamal_Adhikari.png",
    bio: "15 years of professional experience in hospitality business in Japan, and with a proven track record of success in managing and operating hotels, resorts, and restaurants across Nepal.",
  },
  {
    id: "surya-lal-bhandari",
    name: "Surya Lal Bhandari",
    role: "Managing Director",
    image: "/Surya_Lal_Bhandari.png",
    bio: "Highly experienced in banquet hall, and hospitality industry with a proven track record of success in managing banquet hall.",
  },
  {
    id: "dipak-sapkota",
    name: "Dipak Sapkota",
    role: "Manager",
    image: "/Dipak_sapkota.jpeg",
    bio: "10+ years of experience as Operations Manager making day to day operations smooth and easy for all our events.",
  },
];
