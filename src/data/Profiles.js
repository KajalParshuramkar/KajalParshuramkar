import image1 from "../components/images/image1.jpeg";
import image2 from "../components/images/image2.jpeg";
import '../styles.css';

const Profiles = [
    {
      id: 1,
      name: "John Doe",
      photo: image1 ,
      description: "Software Engineer",
      address: "1600 Amphitheatre Parkway, Mountain View, CA",
      coordinates: { lat: 37.4221, lng: -122.0841 },
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: image2,
      description: "Product Manager",
      address: "One Apple Park Way, Cupertino, CA",
      coordinates: { lat: 37.3349, lng: -122.0090 },
    },
  ];
  
  export default Profiles;