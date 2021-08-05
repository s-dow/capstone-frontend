import "./About.scss";
import aboutImage from "../assets/images/syr.jpg";

export const About = () => {
  return (
    <main class="content">
      <div
        class="
            mainContent
            container-fluid
            d-flex
            justify-content-around
            flex-wrap
          "
      >
        <section className="about">
          <h2 className="contactTitle d-flex justify-content-center">About</h2>
          <p className="d-flex justify-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem et
            maxime cupiditate doloremque sequi animi perferendis a magnam atque.
            Voluptatum aliquid dicta ab reiciendis voluptatem. Consequuntur
            facilis eveniet harum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            ipsam porro voluptatum quisquam consequuntur distinctio mollitia
            fugiat quidem nulla aliquid optio ea nobis iure ut perferendis
            voluptatem earum, officiis nemo.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            debitis culpa incidunt! Dolores, tenetur minus hic ad ipsam ea
            totam, suscipit nam, qui aut libero sapiente perspiciatis laudantium
            obcaecati quas.
          </p>
          <div className="d-flex justify-content-between">
            <img src={aboutImage} alt="syracuse ny" className="aboutImg" />
            <img src={aboutImage} alt="syracuse ny" className="aboutImg" />
            <img src={aboutImage} alt="syracuse ny" className="aboutImg" />
          </div>
        </section>
      </div>
    </main>
  );
};
