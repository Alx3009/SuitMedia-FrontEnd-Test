import React from "react";

import ImageSlider from "../components/ImageSlider";
import { SliderData } from '../components/SliderData'; 
import Validation from "../components/Validation";
import '../App.css'

class Main extends React.Component{
    render(){
        return(
           /*  <!----hero Section start----> */
        <div>
        <div class="hero" id="Home">
            <nav>
                <h2 class="header" id="navbar">Company</h2>
                <ul>
                    <div class="dropdown">
                        <div class="dropdown-btn">
                            <li><a href="#Home">About</a></li>
                        </div>
                        <div class="dropdown-content">
                            <a href="#">History</a>
                            <a href="#">Vision Mission</a>
                        </div>
                    </div>
                    <li><a href="#about">Our Work</a></li>
                    <li><a href="#services">Our Team</a></li>
                    <li><a href="#partners">Contact</a></li>
                </ul>
            </nav>
            <div class="bg"><ImageSlider slides={SliderData} /></div>
			<div class="content">
			</div>
	    </div>

	<div>
	{/* <!-----service section start-----------> */}
	<div class="service" id="services">
		<div class="title">
			<h2 id="svc">Our Values</h2>
		</div>
		<div class="box" >
			<div class="card1">
				<img src="assets/images/lightbulb-o.png"/>
				<h5>Innovative</h5>
				<div class="pra">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
				</div>
			
			</div>
			<div class="card2" >
				<img src="assets/images/bank.png"/>
				<h5>Loyalty</h5>
				<div class="pra">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
				</div>
			</div>

			<div class="card3">
			<img src="assets/images/balance-scale.png"/>
				<h5>Respect</h5>
				<div class="pra">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
				</div>
			</div>
		</div>
	</div>
   
	{/* <!-- contact-form --> */}
	
	<div class="contact-form" id="contactUS">
		<div class="row-contact">
			<h1 id="contact-us">Contact us</h1>
		</div>
		<div class="row-contact">
			<div class="col-contact">
			<Validation />
			</div>
			</div>
		</div>
	</div>
<footer>
		<div class="teams">
			<p class="name">Copyright &copy; 2016.PT Company</p>
		</div>
		<div class="icon-footer">
			<img src="assets/images/facebook-official.png"/>
			<img src="assets/images/twitter.png"/>
		</div>
</footer>
	<script>
		feather.replace()
	</script>
<script src="path/to/dist/feather.js"></script>
</div>
        );
    }
}
export default Main;

