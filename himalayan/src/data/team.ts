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
    bio: "Passionate visionary dedicated to bringing royal hospitality and unforgettable dining experiences to life at Himalayan Durbar.",
  },
  {
    id: "surya-lal-bhandari",
    name: "Surya Lal Bhandari",
    role: "Managing Director",
    image: "/Surya_Lal_Bhandari.png",
    bio: "Managing Director leading strategic vision, ensuring luxury standards and operational excellence across every event.",
  },
  {
    id: "dipak-sapkota",
    name: "Dipak Sapkota",
    role: "Manager",
    image: "/Dipak_sapkota.jpeg",
    bio: "Overseeing day-to-day operations and guest relations to ensure flawless event management and hospitality excellence.",
  },
];
