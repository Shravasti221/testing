export const teamData = [
  {
    img1: "https://i.pinimg.com/564x/54/12/1d/54121d42396f39c4e71567749d591a65.jpg",
    name1: "RAHUL",
    desig1: "Team Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/5f/d6/f4/5fd6f45edadf1c108c754dc182365f10.jpg",
    name1: "KIRAN",
    desig1: "Team Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/f3/b4/d1/f3b4d19decb98671f47a348643842e1e.jpg",
    name1: "SAKSHAM",
    desig1: "Teachnical Lead",
  },
  {
    img1: "https://i.pinimg.com/736x/ca/b4/90/cab490f5f3fbba9c6ffca415c692b79a.jpg",
    name1: "ARJUN",
    desig1: "Mechanical Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/3a/eb/40/3aeb40ea943e1c72b953fa4e9b3a9113.jpg",
    name1: "DHANUSH",
    desig1: "Electronics Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/d9/85/a1/d985a1bb65f10c093d27cf56f8639f0a.jpg",
    name1: "ANVAY",
    desig1: "Electronics Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/d8/ad/8d/d8ad8dce33d8991ffd2bdbaac7649e6a.jpg",
    name1: "ADITYA",
    desig1: "Software Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/f8/9e/80/f89e8057acd1d2d1fcb8505147a68f67.jpg",
    name1: "Shravasti",
    desig1: "Software Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/35/6c/42/356c42cda77596659b4f1c246e752017.jpg",
    name1: "SHASHANK",
    desig1: "Software Lead",
  },
  {
    img1: "https://i.pinimg.com/564x/16/00/fd/1600fdab611480f75641beebb2f743d1.jpg",
    name1: "ROHITH",
    desig1: "Event Management",
  },
  {
    img1: "https://i.pinimg.com/564x/6d/93/84/6d9384bd55361e4a6cc48623f19fffec.jpg",
    name1: "SWETHA",
    desig1: "Social Media",
  },
  {
    img1: "https://i.pinimg.com/564x/45/75/d5/4575d55bcfda30a1ea3522ebe43779db.jpg",
    name1: "KRITHIKA",
    desig1: "Social Media",
  },
  {
    img1: "https://i.pinimg.com/564x/0e/fe/7d/0efe7d3c8ef9ef2397724600bb0edd76.jpg",
    name1: "MUTHU",
    desig1: "Sponsorships",
  },
  {
    img1: "https://i.pinimg.com/564x/a3/84/4c/a3844c61ebed971eaf947953482e62f8.jpg",
    name1: "KRISHNA",
    desig1: "Inventory",
  },
];

export default function MemberAlt(props) {
  const data = teamData[props.id];
  return (
    <div className="team_alt_wrap">
      <div className="team_alt_card">
        <div className="team_alt_card-liner">
          <figure>
            <img src={data.img1} alt="" />
          </figure>
          <div className="team_alt_card--social">
            <ul>
              <li className="twitter">
                <a href="#0">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="linkedin">
                <a href="#0">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="team_alt_card--title">
            <h3>{data.name1}</h3>
            <p>{data.desig1}</p>
          </div>
          <div className="team_alt_card--desc">
            <hr />
            <p>
              Coffee, code, repeat... he doesn't eat food, and only stops to
              defend the table tennis crown.
            </p>
          </div>
          <div className="team_alt_card--btn">
            <a href="#0">
              <span className="team_alt_moreinfo">
                <i className="fa fa-info-circle"></i> More Info
              </span>
              <span className="team_alt_fullprof">View Full Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
