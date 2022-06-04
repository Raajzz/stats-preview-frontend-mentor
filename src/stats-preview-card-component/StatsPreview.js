import React from "react";
import Helmet from "react-helmet";
import "./StatsPreview.css";
import imageHeader from "./assets/image-header-desktop.jpg";

const StatsPreview = () => {
	return (
		<>
			<Helmet>
				<style>
					{`
              body{
                background-color: hsl(233, 47%, 7%);
                color: white;
                font-family: 'Lexend Deca',sans-serif;
              }
            `}
				</style>
			</Helmet>
			<div className="card-container">
				<main className="card">
					<div className="text-section">
				  
						<div>
							<h1>
								Get <span className="insights">insights</span> that help your
								business grow.
							</h1>
							<p>
								Discover the benefits of data analytics and make better
								decisions regarding revenue, customer experience, and overall
								efficiency.
							</p>
						</div>

						<div className="stats-section">

							<div className="single-stat">
								<div className="title">10k+</div>
								<div className="sub-title">COMPANIES</div>
							</div>
              
							<div className="single-stat">
								<div className="title">314</div>
								<div className="sub-title">TEMPLATES</div>
							</div>
              
							<div className="single-stat">
								<div className="title">12M+</div>
								<div className="sub-title">QUERIES</div>
							</div>

						</div>

					</div>
					<div className="image-section">
						<img
							src={imageHeader}
							alt="People discussing and working"
							className="image-class"
						/>
					</div>
				</main>
			</div>
		</>
	);
};

export default StatsPreview;
