import "../css/adminpageeventcards.css";

export function AdminPageEventCards() {
  const styles = { width: "18rem" };
  return (
    <div>
        <div className="container">
        <div class="card" style={styles}>
        <img
          src="https://s3.envato.com/files/276485772/HACKATHON2590.jpg"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Hackathone</h5>
          <p class="card-text">Eventdate : 2022-10-02 : 12.00pm</p>
          <p class="card-text">Event type : online</p>
          <a href="/" class="btn btn-primary" id="edit">
            Edit
          </a>
          <a href="/" class="btn btn-primary" id="delete">
            Delete
          </a>
        </div>
      </div>


      <div class="card" style={styles}>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--G8d84OQM--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/zp36f8br46sf1hybdk4l.png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Coding Event</h5>
          <p class="card-text">Eventdate : 2022-05-20 : 12.00pm</p>
          <p class="card-text">Event type : online</p>
          <a href="/" class="btn btn-primary" id="edit">
            Edit
          </a>
          <a href="/" class="btn btn-primary" id="delete">
            Delete
          </a>
        </div>
      </div>



      <div class="card" style={styles}>
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/415.jpg"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">themepark</h5>
          <p class="card-text">Eventdate : 2022-09-02 : 12.00pm</p>
          <p class="card-text">Event type : online</p>
          <a href="/" class="btn btn-primary" id="edit">
            Edit
          </a>
          <a href="/" class="btn btn-primary" id="delete">
            Delete
          </a>
        </div>
      </div>



      
      
        </div>
     
      
    </div>
  );
}
