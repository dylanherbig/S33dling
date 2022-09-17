import { Pixelify } from "react-pixelify";
import PlantCamera from './components/Camera';

// Require your image
const src = require("./image.jpg");
  
// Basic setup
<Pixelify
  src={src}
  pixelSize={20}
/>