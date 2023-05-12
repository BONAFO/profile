import LCard from "../components/ProgrammingCard";
import isMobile from "../style effects/isMobile";

const routeStage = process.env.NODE_ENV === "development" ? "" : "/profile/#";

export default function MyProyects() {
  return (
    <div>
      <br />
      <div className="skills-text t-shadow-basic">
        <h3
          style={{
            fontSize: isMobile() ? "5vh" : "5vw",
          }}
        >
          MY SKILLS
        </h3>
      </div>
      <br />
      <div>
        <LCard
          lengData={[
            {
              name: "js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            },
            {
              name: "nodejs",
              icon: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            },
            {
              name: "expressjs",
              icon: "https://itproger.com/intensive/img/express.png",
            },
            {
              name: "react",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            },
            {
                name: "jquery",
                icon: "https://www.nicepng.com/png/detail/274-2741860_jquery-in-easy-steps-create-dynamic-web-pages.png",
              },

            {
              name: "redis",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
            },
            {
              name: "jwt",
              icon: "https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png",
            },
            {
                name: "bcrypt",
                icon: "https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0",
              },

            {
                name: "electronjs",
                icon: "https://static-00.iconduck.com/assets.00/redis-plain-icon-2048x1748-fmvimw1g.png",
              },
  
            {
              name: "mongodb",
              icon: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
            },
            {
              name: "mysql",
              icon: "https://ventiv.solutions/wp-content/uploads/2021/02/mySQL-logo.png",
            },
            {
              name: "jestjs",
              icon: "https://www.kindpng.com/picc/m/287-2877399_jest-jest-testing-logo-png-transparent-png.png",
            },
            {
              name: "mochajs",
              icon: "https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667",
            },
          ]}
          proyectURL={"https://github.com/BONAFO?tab=repositories"}
          stack={"JS/MERN/SERN"}
        ></LCard>
      </div>
      <br />
      <div>
        <LCard
          lengData={[
            {
              name: "python",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
            },
          ]}
          proyectURL={"https://github.com/BONAFO?tab=repositories"}
          stack={"PYTHON"}
        ></LCard>
      </div>
      <br />
      <div>
        <LCard
          lengData={[
            {
              name: "php",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
            },
            {
              name: "postgres",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
            },
          ]}
          proyectURL={"https://github.com/BONAFO?tab=repositories"}
          stack={"PHP"}
        ></LCard>
      </div>
      <br />
      <div>
        <LCard
          lengData={[
            {
              name: "aws",
              icon: "https://www.sophos.com/sites/default/files/2022-02/aws-logo-white-orange.png",
            },
          ]}
          proyectURL={"https://github.com/BONAFO?tab=repositories"}
          stack={"DEPLOY"}
        ></LCard>
      </div>
      <br />
      <div>
        <LCard
          lengData={[
            {
              name: "docker",
              icon: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
            },
            {
              name: "docker-compose",
              icon: "https://www.seekpng.com/png/detail/525-5256723_docker-compose-logo.png",
            },
            {
                name: "docker-linux",
                icon: "https://pngimg.com/uploads/linux/linux_PNG1.png",
              },
          ]}
          proyectURL={"https://github.com/BONAFO?tab=repositories"}
          stack={"DOCKER"}
        ></LCard>
      </div>
    </div>
  );
}


