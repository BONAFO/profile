import ContactCard from "../components/ContactCard";

export default function Contact() {
  const methods = [
    {
      name: "LINKEDIN",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
      link: "https://www.linkedin.com/in/bruno-giuliano-bonasif-colloca-b20a24213/",
    },
    {
      name: "GITHUB",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      link: "https://github.com/BONAFO",
    },
    {
        name: "GITLAB",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
        link: "https://gitlab.com/BONAFO08",
      },
    {
      name: "EMAIL",
      text: "bgbcnnvb@gmail.com",
    },
  ];


  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {methods.map((method) => (
          <ContactCard key={`${method.name.toLowerCase()}-contact`} method={method} />
        ))}
      </div>
    </div>
  );
}
