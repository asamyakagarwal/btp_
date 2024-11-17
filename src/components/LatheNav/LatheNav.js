import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./LatheNav.css";

const LatheNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">

        <ul class="nav-list">


        <li class="nav-item dropdown">
          <Link to="/types" class="nav-link">Types</Link>
          <ul class="dropdown-menu">
          <li><a href="#center">Center Lathe</a></li>
            <li><a href="#automatic">Automatic Lathe</a></li>
            <li><a href="#toolroom">Toolroom Lathe</a></li>
            <li><a href="#turret">Turret Lathe</a></li>
            <li><a href="#speed">Speed Lathe</a></li>
            <li><a href="#bench">Bench Lathe</a></li>
            <li><a href="#cnc">CNC Lathe</a></li>
            <li><a href="#spm">SPM Lathe</a></li>
          </ul>
        </li>


     

        <li class="nav-item dropdown">
          <Link to='/accessories' class="nav-link">Accessories</Link>
          <ul class="dropdown-menu">
            <li><a href="#angle-plate">Angle Plate</a></li>
            <li><a href="#catch-plate">CAtch Plate</a></li>
            <li><a href="#centers">Centers</a></li>
            <li><a href="#chucks">Chuck</a></li>
            <li><a href="#faceplate">Face Plate</a></li>
            <li><a href="#lathedogs">Lathe Dogs</a></li>
            <li><a href="#mandrels">Mandrel</a></li>
            <li><a href="#rests">Rests</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/operations" class="nav-link">Operations</Link>
          <ul class="dropdown-menu">
            <li><a href="#centering">Centering</a></li>
            <li><a href="#turning">Turning</a></li>
            <li><a href="#facing">Facing</a></li>
            <li><a href="#knurling">Knurling</a></li>
            <li><a href="#filing">Filing</a></li>
            <li><a href="#grooving">Grooving</a></li>
            <li><a href="#spinning">Spinning</a></li>
            <li><a href="#forming">Forming</a></li>
            <li><a href="#chamfering">Chamfering</a></li>
            <li><a href="#miling">Milling</a></li>
            <li><a href="#polishing">More....</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/attachments" class="nav-link">Attachments</Link>
          <ul class="dropdown-menu">
            <li><a href="#gearcutting">Gear Cutting</a></li>
            <li><a href="#grinding">Grinding </a></li>
            <li><a href="#miling">Milling</a></li>
            <li><a href="#sphericalturning">Spherical Turning</a></li>
            <li><a href="#taperturning">Taper Turning</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/parameters" class="nav-link">Parameters</Link>
          <ul class="dropdown-menu">
            <li><a href="#mt">Machine Time</a></li>
            <li><a href="#doc">Depth of Cut</a></li>
            <li><a href="#cs">Cutting Speed</a></li>
            <li><a href="#np">Net Power</a></li>
            <li><a href="#mrr">Metal Removal Rate</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/fluids" class="nav-link">Fluids</Link>
          <ul class="dropdown-menu">
          <li><a href="#solublecutting">Soluble Cutting Oil</a></li>
            <li><a href="#semisenthetic">Semi Synthetic Oil</a></li>
            <li><a href="#straight">Straight Fluids</a></li>
          </ul>
        </li>


       

        <li class="nav-item dropdown">
          <Link to="/applications"  class="nav-link">Applications</Link>
          <ul class="dropdown-menu">
            <li><a href="#woodturning">WoodTurning</a></li>
            <li><a href="#metalworking">Metalworking</a></li>
            <li><a href="#metalspinning">Metal Spinning</a></li>
            <li><a href="#acrylicspinning">Acrylic Spinning</a></li>
            <li><a href="#thermalspraying">Thermal Spraying</a></li>
            <li><a href="#pottery">Pottery</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/cuttingtools"  class="nav-link">Cutting Tools</Link>
          <ul class="dropdown-menu">
            <li><a href="#material">Material Based</a></li>
            <li><a href="#operation">Operation Based</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <Link to="/safety" class="nav-link">Precautions</Link>
        </li>


       </ul>

    </nav>
  );
};

export default LatheNav;