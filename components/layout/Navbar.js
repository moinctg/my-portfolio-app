import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav id="navmenu" className="navmenu">
  <ul>
    <li><a href="#hero" className="active">Home<br /></a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
      <ul>
        <li><a href="#">Dropdown 1</a></li>
        <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
          <ul>
            <li><a href="#">Deep Dropdown 1</a></li>
            <li><a href="#">Deep Dropdown 2</a></li>
            <li><a href="#">Deep Dropdown 3</a></li>
            <li><a href="#">Deep Dropdown 4</a></li>
            <li><a href="#">Deep Dropdown 5</a></li>
          </ul>
        </li>
        <li><a href="#">Dropdown 2</a></li>
        <li><a href="#">Dropdown 3</a></li>
        <li><a href="#">Dropdown 4</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <i className="mobile-nav-toggle d-xl-none bi bi-list" />
</nav>

    </>
  )
}
