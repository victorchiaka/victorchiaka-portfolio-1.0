export type AccordionIcon = {
  icon: "Frontend" | "Backend" | "Software";
}

export type Category = {
  title: string;
  icon: string | AccordionIcon;
  technologies: string[];
};

export type ContactDetail = {
  link: string;
  hoverColor: string;
  socialMediaIcon: string;
  socialMediaName: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  githubLink: string;
  icon: string;
};
